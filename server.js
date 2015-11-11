var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var fs = require('fs');
var multipart = require('connect-multiparty')
var pool = mysql.createPool({
	"host":"localhost",
	"port":3306,
	"user":"root",
	"password":"kmam",
	"database":"upbexten"
});

app.use(express.static(__dirname + "/app"));
app.use("/bower_components",express.static(__dirname + "/bower_components"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multipart());
app.use(bodyParser());

app.post('/select/:table',function(request,response){
	//Definicion de Variables
	var query = "";

	query = "SELECT * FROM " + request.params.table;
	query += request.body.WHERE;
	console.log(query);
	
	pool.getConnection(function(error, connection){

			if(error){ return console.log(error); }		
			
			connection.query(query, function(error, rows, fields){
				
				console.log(rows);
				response.send(rows);
				connection.release();
			
			});
	});

});

app.post('/upload', function(request, response) {0
    //get the temporary location of the file
    console.log(request.body);
    console.log(request.files.thumbnail);
    var tmp_path = request.files.thumbnail.path;
    // set where the file should actually exists - in this case it is in the "images" directory
    var target_path = './app/images/' + request.files.thumbnail.name;
    // move the file from the temporary location to the intended location
    fs.rename(tmp_path, target_path, function(error) {
        if (error) throw error;
        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
        fs.unlink(tmp_path, function() {
            if (error) throw error;
            console.log('File uploaded to: ' + target_path + ' - ' + request.files.thumbnail.size + ' bytes');
        	//response.send(request.files.archivo);
        });
    });

});

app.post("/insert/:table",function(request, response){

	console.log("Insertando");
	//Deficion de variables
	var query = "";
	var columns="";
	var values="";
	var coma= "";
	
	console.log(request.body);

	//Manejo y Conversion de Solicitud a estructura de consulta
	var data = JSON.stringify(request.body).replace("{","").replace("}","");
	console.log(data);
	var dataArray = data.split(",")
	console.log(dataArray);
	
	for(var i=0;i < dataArray.length;i++){		
			var colValue = dataArray[i].split(":");
			console.log(colValue);
			console.log(colValue[0]);
			columns += coma + colValue[0].substring(1,colValue[0].length - 1);
			console.log(columns);
			console.log(colValue[1]);
			console.log("TAMANO");
			console.log(colValue[1].length);
			values += coma + "'" + colValue[1].substring(1,colValue[1].length - 1) + "'";
			console.log(values);
			coma = ",";
	}

	//Construccion de la consulta
	query = "INSERT INTO " +request.params.table+ "(" +columns+ ")";
	query += " VALUES (" +values+ ");";
	console.log(query);
	//Coneccion
	
	pool.getConnection(function(error,connection){

		if(error){ return console.log(error); }
		
		//Envio de consulta
		connection.query(query,function(error,rows,fields){
			
			if(error){ return console.error(error); }
			
			connection.release();

		});

	});

});	

app.post("/update/:table/:codigo", function(request, response){	
	//Declaracion de variables
	var columns = "";
	var query = "";
	var coma = "";
	
	//Manejo y Conversion de Solicitud a estructura de consulta
	var data = JSON.stringify(request.body).replace("{","").replace("}","");
	var dataArray = data.split(",");

	for(var i=0;i < dataArray.length;i++){
		var colValue = dataArray[i].split(":");
		console.log(colValue[0].substring(1,colValue[0].length - 1));
		console.log(colValue[1].substring(1,colValue[1].length - 1));
		columns += coma + " " +colValue[0].substring(1,colValue[0].length - 1)+" = '"+ colValue[1].substring(1,colValue[1].length - 1) + "'";
		coma = ",";
	}

	//Construccion de la consulta	
	query = "UPDATE " +request.params.table+ " SET " +columns+ " WHERE CodigoUsuarioP = '"+request.params.codigo+"';";
	console.log(query);

	//Coneccion
	pool.getConnection(function(error,connection){
		
		if(error){ return console.log(error); }

		//Envio de consulta
		connection.query(query,function(error,rows,fields){
			
			if(error){ return console.error(error); }

			connection.release();
		
		});

	});

});	

app.post("/delete/:table/:codigo", function(request, response){
		
	//Declaracion de variables
	var query = "";
	
	//Construccion de la consulta
	query = "DELETE FROM " +request.params.table+ " WHERE codigo = " +request.params.codigo;

	//Coneccion
	pool.getConnection(function(error, connection){
		if(error){ return console.log(error); }
		
		//Envio de la consulta
		connection.query(query, function(error, rows, fields){
			
			if (error){ return console.log(error); }

       		connection.release();

		});

	});

});

var port = 8080;
app.listen(port);
console.log("Server is running on " + port);