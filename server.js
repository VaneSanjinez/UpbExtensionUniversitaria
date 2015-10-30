var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
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

app.post('/select/:table',function(request,response){
	
	//Definicion de Variables
	var query = "";
	pool.getConnection(function(error, connection){
			if(error){
				return console.log(error);
			}

			query = "SELECT * FROM " +request.params.table;

			connection.query(qry, function(error, rows, fields){
				console.log(rows);
				connection.release();
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
			columns += coma + colValue[0].substring(1,colValue[0].length - 1);
			values += coma + "'" + colValue[1].substring(1,colValue[1].length - 1) + "'";
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
	var query = "";
	var columns = "";
	var coma = "";
	
	//Manejo y Conversion de Solicitud a estructura de consulta
	var data = JSON.stringify(request.body).replace("{","").replace("}","");
	var dataArray = data.split(",");

	for(var i=0;i < dataArray.length;i++){
		var colValue = dataArray[i].split(":");
		console.log(colValue[0].substring(1,colValue[0].length - 1));
		console.log(colValue[1].substring(1,colValue[1].length - 1));
		Columns += coma + " " +colValue[0].substring(1,colValue[0].length - 1)+" = '"+ colValue[1].substring(1,colValue[1].length - 1) + "'";
		coma = ",";
	}

	//Construccion de la consulta	
	query = "UPDATE " +request.params.table+ " SET " +columns+ " WHERE id = '"+request.params.codigo+"';";

	//Coneccion
	pool.getConnection(function(error,connection){
		
		if(error){ return console.log(error); }

		//Envio de consulta
		connection.query(query,function(or,rows,fields){
			
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