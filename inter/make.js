





intro =
`<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">
	
		<title>BARNABAS</title>

		<script src='panzoom.min.js'></script>

		<style>
			html {
				
				margin:0;
				padding:0;
				
				width:100%;
				height:100%;
			}
			
			
			body {
				
				margin:0;
				padding:0;
				
				width:100%;
				height:100%;
				
				font-family:		sans-serif;
			}
			
			a {
				
				color:				black;
				text-decoration:	none;
			}

			a:hover {
				
				text-decoration:	underline;
			}
			
			table {
				
				margin-top:			3px;
				font-size:			13px;
			}

			table td {
				
				padding-right:		15px;
			}
			
			table tr:nth-child(even) {
				
				background: #eee;
			}
			
			table tr:hover {
				
				background: #f3efe3; 
				
			}
			
			
			#left {
				
				margin:0;
				padding:0;
				
				width:100%;
				height:100%;
				
				float:left;
				overflow: auto;
			
			}
			
			
			#right {
				
				margin:0;
				padding:0;
				
				width:0%;
				height:100%;
				
				float:left;
				overflow: hidden;
			}

			

			#inleft {
				
				padding:5px;
			}

			
			img {
				
				border: 2px dashed rgba(28,110,164,0.32);
				border-radius: 14px;
			}
			
			.prigent  {
			
				cursor:	pointer;
				color:	blue;
			}
			
			#banniere {
			
				margin:0px;
				padding:0px;
				
				color:white;
				background-color:#172028;
				
				
				
				/*white-space:nowrap;*/
				/*display: flex;*/
			}
		
			.blocban {
				
				margin:0px;
				padding:10px;
				
				display:inline-block;
				
				font-size:0.9em;
				color:white;
				text-decoration:none;
			}
			
			
			.blocban:hover {
				
				text-decoration:none;
				background-color:#3f4346;
			}

			rtxt {
				color: green;
			}
			
			wits {
				color: red;
			}
			
			table b {
				display: block;
				color: orange;
				margin-bottom: 3px;
			}
			
			.int {
				display:inline-block;
				margin:7px
			}


			.el {
				font-size:17px;
				font-family:Serif;
				display:block;
			}

			.fr {
				font-size:16px;
				display:block;
			}

			.info {
				font-size:13px;
				color:#888888;
				display:block;
			}

			.subinfo {
				font-size:10px;
				color:#888888;
				display:block;
			}

			.lemme {
				font-size:14px;
				color: #444444;
				display:block;
			}
			
			.lemme a {
				color:#4b86ff;
			}
			
			.trs {
				line-height:1.3em;
				font-size:14px;
				outline:none;
				box-shadow:3px 3px 2px 0px #999999b3;
			    border: 1px solid #F7E98D;
				box-sizing:border-box;
				padding: 15px 15px 30px;
				width:100%;
				height:100%;
				display: block;
			}
			
			#show {
				background-color: white;
				position: fixed;
				width: 100%;
				height: 90%;
				top: 0;
			}
			
		</style>
		
		<script>
		
		
		alltrs = ""
		
		function addtrs(id)
		{
			linetrs = document.getElementById(id).value;
			
			intro = id.split('_')
			intro = 'BARNABAS:'+intro[2]+':'+intro[3];
			
			alltrs += intro+' '+linetrs+"\\n"
			
		}
		
		function lire()
		{
			document.getElementById('show').style.display = "initial";
			document.getElementById('textarea_trs').value = alltrs;
		}
		
		
		function save()
		{
			alltrs = document.getElementById('textarea_trs').value;
			document.getElementById('show').style.display = "none";
			
		}

		
		</script>
		
	</head>

<body>

<div style="display:none;" id="show"><div onclick="save()" style="padding:1em;cursor:pointer;user-select:none;">[SAUVE_ECHAP]</div><textarea class="trs" id="textarea_trs"></textarea></div>

<div id="left">
<div id="banniere"><!--
	--><span class="blocban">Ȼ</span><!--
	--><a class="blocban" href="../../index.html">INDEX</a>
</div>
<div id="inleft">

<p><a href="28-1.html">BARNABAS</a>&ensp;

`;




end = `
</tbody></table>
<br>
</div></div>

<div id="right">
	<div id="inright">
		<img onload="loader();" id="box" src=""></div>
	</div>
</div>

</body>
<script>



function montrer(id)
{
	document.getElementById('bgd'+id).style='visible';
	document.getElementById('ba'+id).style='visible';
	document.getElementById('bp'+id).style='visible';
}


function cacher(id)
{
	document.getElementById('bgd'+id).style='display:none';
	document.getElementById('ba'+id).style='display:none';
	document.getElementById('bp'+id).style='display:none';
}



show	= 0;
current	= ""

			
element = document.getElementById('inright')
elempic = document.getElementById('box')

nbmakelc	= 0;
lcarray 	= {}





		


function view(link)
{

	//clean
	document.getElementById('box').src = ""

	
	//get info
	classn = "prigent"


	if (classn != current)
	{

		
		
		if (current != "")
		{
			//CLOSE
			for (xnc = 0 ; xnc != document.getElementsByClassName(current).length ; xnc++ )
			{
				document.getElementsByClassName(current)[xnc].innerHTML = current.toUpperCase()
			}
		}
		
		//OPEN
		for (xnc = 0 ; xnc != document.getElementsByClassName(classn).length ; xnc++ )
		{
			document.getElementsByClassName(classn)[xnc].innerHTML = " [  ECHAP "+classn.toUpperCase()+" ]"
		}
		
		document.getElementById('left').style.width = "50%";
		document.getElementById('right').style.width = "50%";
		
		document.getElementById('box').src = '../pic/'+link+".jpg";
		
		current = classn;
		show = 1;
		
		//resize
		//pvx = document.getElementById('inright').offsetWidth/document.getElementById('box').offsetWidth
		//panzoom(element).zoomAbs(0,0,0.1);
		
	}
	
	else if (classn == current)
	{
		
		//CLOSE
		for (xnc = 0 ; xnc != document.getElementsByClassName(classn).length ; xnc++ )
		{
			document.getElementsByClassName(classn)[xnc].innerHTML = classn.toUpperCase()
		}
		
		document.getElementById('left').style.width = "100%";
		document.getElementById('right').style.width = "0%";
		show = 0;
		
		current = "";
	
	}

	window.location = (""+window.location).replace(/#.*?$/,'')+"#V"+eimiv;
}




instance = panzoom(element, 
	{
		maxZoom: 100,
		minZoom: 0.01,
		initialX: 0,
		initialY: 0,
		initialZoom: 0.2,
		filterKey: function() 
		{
			return true;
		}
	});



function loader()
{
	
	pvx=document.getElementById('inright').offsetWidth/document.getElementById('box').offsetWidth;
	instance.dispose()
	
	instance = panzoom(element, 
	{
		maxZoom: 100,
		minZoom: 0.01,
		initialX: 0,
		initialY: 0,
		initialZoom: pvx,
		filterKey: function() 
		{
			return true;
		}
	});
	

	
}






document.onkeydown = checkKey;

function checkKey(e) 
{
	
	e = e || window.event;

	console.log(e.keyCode)
	
	if (e.keyCode == '27') 
	{
		alltrs = document.getElementById('textarea_trs').value;
		document.getElementById('show').style.display = "none";
	}
	
	
	if (elempic.getAttribute("src") != "")
	{

		pic = elempic.src.match(/([0-9]+).jpg/)[1]

		
		
		if (e.keyCode == '27') {
			
			view('prigent')
			
			
			
		}
		
		
		//else if (e.keyCode == '38') {document.getElementById('left').scrollTop = 0;}
		
		//else if (e.keyCode == '40') {document.getElementById('left').scrollTop = 999999;}

		
		else if (e.keyCode == '37') {
			
			if (pic > 0)
			{
					pic--
					
					elempic.src = "../pic/"+pic+".jpg";
				
			}
		}
		
		else if (e.keyCode == '39') 
		{
			
				if (pic < 153)
					pic++
				
				elempic.src = "../pic/"+pic+".jpg";

			
		}
		


	}

}






</script>


</html>

`








chbook = 
`
<a href="28-1.html">CH1</a>&ensp;<a href="28-2.html">CH2</a>&ensp;<a href="28-3.html">CH3</a>&ensp;<a href="28-4.html">CH4</a>&ensp;<a href="28-5.html">CH5</a>&ensp;<a href="28-6.html">CH6</a>&ensp;<a href="28-7.html">CH7</a>&ensp;<a href="28-8.html">CH8</a>&ensp;<a href="28-9.html">CH9</a>&ensp;<a href="28-10.html">CH10</a>&ensp;<a href="28-11.html">CH11</a>&ensp;<a href="28-12.html">CH12</a>&ensp;<a href="28-13.html">CH13</a>&ensp;<a href="28-14.html">CH14</a>&ensp;<a href="28-15.html">CH15</a>&ensp;<a href="28-16.html">CH16</a>&ensp;<a href="28-17.html">CH17</a>&ensp;<a href="28-18.html">CH18</a>&ensp;<a href="28-19.html">CH19</a>&ensp;<a href="28-20.html">CH20</a>&ensp;<a href="28-21.html">CH21</a>&ensp;
`


//sort alphanum
//const sortalphanum = (a, b) => a.localeCompare(b, 'en', { numeric: true })

lcv_prigent = {
 "BARNABAS:1": "7",
 "BARNABAS:2": "13",
 "BARNABAS:3": "23",
 "BARNABAS:4": "27",
 "BARNABAS:5": "39",
 "BARNABAS:6": "49",
 "BARNABAS:7": "63",
 "BARNABAS:8": "71",
 "BARNABAS:9": "75",
 "BARNABAS:10": "83",
 "BARNABAS:11": "93",
 "BARNABAS:12": "101",
 "BARNABAS:13": "109",
 "BARNABAS:14": "113",
 "BARNABAS:15": "117",
 "BARNABAS:16": "123",
 "BARNABAS:17": "129",
 "BARNABAS:18": "129",
 "BARNABAS:19": "131",
 "BARNABAS:20": "145",
 "BARNABAS:21": "149",
}




fichier	= require('fs');





//barnabas_el			=  fichier.readFileSync('../barnabas_el.txt',							'utf8');
sebastien_te			=  fichier.readFileSync('../nd/barnabas_nd_te.txt',						'utf8').split('\n')
sebastien_fr			=  fichier.readFileSync('../nd/barnabas_nd_fr.txt',						'utf8').split('\n')

greekdoc			=  fichier.readFileSync('../greekdoc/barnabas_greekdoc_te.txt',			'utf8');
barnabas_angel		=  fichier.readFileSync('../angel/barnabas-angel-te.txt',				'utf8');
barnabas_perseus	=  fichier.readFileSync('../perseus/barnabas-perseus-te.txt',			'utf8');
prigent				=  fichier.readFileSync('../prigent/prigent.txt',						'utf8');
hippolyte			=  fichier.readFileSync('../hippolyte/hippolyte.txt',					'utf8');
catho				=  fichier.readFileSync('../catho/catho.txt',							'utf8');
english				=  fichier.readFileSync('../english/english.txt',						'utf8');




//FUSION NDH-NDF
//CHECK 1
if (sebastien_te.length != sebastien_fr.length)
	console.log('error length file ' + sebastien_te.length)

ndfh = ""
for (line = 0 ; line != sebastien_te.length ; line++)
{
	
	
	if (sebastien_te[line] != "")
	{
		//CHECK 2
		if (sebastien_te[line].split(' ')[0] != sebastien_fr[line].split(' ')[0])
			console.log("error info vers")
		
		ndfh += sebastien_te[line].replace(":1:2022:",":0:2022:")+'||-F-||'+sebastien_fr[line].replace(":1:2022:",":0:2022:")+"\n"
		
	}
	
}








bible =
//barnabas_el		+
ndfh				+
greekdoc			+
barnabas_angel		+
barnabas_perseus	+
prigent		  		+
hippolyte			+
catho				+
english				;


bible = bible.split(/\r\n?|\n/).sort(new Intl.Collator('en',{numeric:true, sensitivity:'accent'}).compare)



data		= '';
backchap	= 1;
backverset	= 0;



for (line = 0 ; line != bible.length ; line++)
{
	
	
	if (bible[line] != "")
	{
	
	
	//1:1:2:80:BARNABAS-EL 
	//0 1 2 3  4

	
	info		= bible[line].split(' ')

	lcv			= info[0].split(':')
	livre		= 28
	chapitre	= lcv[0]
	verset		= lcv[1]
	position	= lcv[2]
	date		= lcv[3]
	traducteur	= lcv[4]
	
	xlcv	= 'BARNABAS:'+chapitre;
	texte	= bible[line].replace(info[0]+" ","")
	
	id_trs = 'trs_'+livre+'_'+chapitre+'_'+verset;
	
	//console.log(line+'--> '+backchap+':'+backverset+' '+bible[line]+' '+livre+' '+chapitre)
	//console.log(line+'--> '+bible[line]+' '+livre+' '+chapitre)



	if ((chapitre != backchap))
	{
		introv = '';
		for (nx=0 ; nx != backverset ; nx++)
		{
			nb_for = nx+1;
			introv += '<a href="#V'+nb_for+'">V'+nb_for+'</a>&ensp;';
		}

		intros	=	intro;
		intros	+=	chbook+'<br><br>'+introv
		intros	=	intros.replace('>'+'CH'+backchap+'<','><b>[ CH'+backchap+' ]</b><')


		//data = intro;

		fichier.writeFileSync(backlivre+'-'+backchap+'.html',intros+data+end, 'utf8');
		data = '';
		
		
	}

	
	



	
	if (backverset != verset)
{

	if (verset != 1)
		data +=`</tbody></table>`


		data +=`
<br><br><div id="V`+verset+`"></div><a href="#banniere"><b>BARNABAS`+' '+chapitre+' '+verset+`</b></a> 
<button onclick="montrer('`+chapitre+`_`+verset+`')">montrer</button>
<button onclick="cacher('`+chapitre+`_`+verset+`')">cacher</button>
<span style="padding-left:1em;cursor:pointer;user-select:none;" onclick="lire()">LIRE</span>
<table cellspacing="0"><tbody>
`;


}




	if (traducteur.indexOf('BARNABAS_ND') != -1)
	{

		
		nd_inter = ""
		
		
		splitligneseb = bible[line].split('||-F-||')

		textete = splitligneseb[0].replace(info[0]+" ","").split(' ')
		textefr = splitligneseb[1].replace(info[0]+" ","").split('#')
		
		
		if (textete != "")
		{
			
			
			
			//CREATION TR SPAN
			for (s = 0 ; s != textete.length ; s++)
			{
				
					//console.log(textete)

					
					
					if (textete[s].split('=')[2].match(/,/))
					{
						lem1 = textete[s].split('=')[2].split(',')[0];
						lem2 = textete[s].split('=')[2].replace(lem1+',',""); 
					}

					else
					{
						lem1 = textete[s].split('=')[2];
						lem2 = '-';
					}


					nd_inter +=``+
					`<div class="int">`+
					`<span class="el">`+textete[s].split('=')[0]+`</span>`+
					`<span class="fr">`+textefr[s]+`</span>`+
					`<span class="info">`+lem1+`</span>`+
					`<span class="subinfo">`+lem2+`</span>`+
					`<span class="lemme"><a target="_blank" href="../../lemme/`+textete[s].split('=')[1]+`.html">`+textete[s].split('=')[1]+`</a></span>`+
					`</div>`;


			}	
			
			//add tr
			data += `\n<tr><td class="td1">BARNABAS_ND</td><td class="td2">80</td><td class="td3">`+nd_inter+`</td></tr>`;
			
			
			data += 
			'<tr>'+
			'<td class="td1" nowrap><button onclick="addtrs(\''+id_trs+'\');this.style.background=\'#00eb00\'">NOUVELLE_DISPOSITION</button></td>'+
			'<td class="td2">'+date+'</td>'+
			'<td class="td3"><textarea id="'+id_trs+'" class="trs" style="">'+textefr.join(' ').replace(/;/g," ?")+'</textarea></td></tr>'
			
		
		}

	}	
	









	else if (traducteur.indexOf('GREEKDOC') != -1)
	{

		
		nd_inter = ""
		
		textete = bible[line].replace(info[0]+" ","").split(' ')
		
		
		if (textete != "")
		{
			
			
			
			//CREATION TR SPAN
			for (s = 0 ; s != textete.length ; s++)
			{
				
					//console.log(textete)

					
					// τότε=then=lexicon/to.html#tote
					
					
					if (textete[s].split('=')[1].match(/,/))
					{
						lem1 = textete[s].split('=')[1].split(',')[0];
						lem2 = textete[s].split('=')[1].replace(lem1+',',""); 
					}
					
					else if (textete[s].split('=')[1].match(/;/))
					{
						lem1 = textete[s].split('=')[1].split(';')[0];
						lem2 = textete[s].split('=')[1].replace(lem1+';',""); 
					}

					else
					{
						lem1 = textete[s].split('=')[1];
						lem2 = '-';
					}
					

					namelinkgd = textete[s].split('=')[2].replace(/^.*?html#/,"")

					nd_inter +=``+
					`<div class="int">`+
					`<span class="el">`+textete[s].split('=')[0]+`</span>`+
					`<span class="fr">`+lem1+`</span>`+
					`<span class="subinfo">`+lem2+`</span>`+
					`<span class="lemme"><a target="_blank" href="http://www.greekdoc.com/bible/`+textete[s].split('=')[2]+`">`+namelinkgd+`</a></span>`+
					`</div>`;


			}	
			
			//add tr
			data += `\n<tr id="bgd`+chapitre+`_`+verset+`" style="display: visible;"><td class="td1">BARNABAS_GREEKDOC</td><td class="td2">80</td><td class="td3">`+nd_inter+`</td></tr>`;
		
		}

	}	
	











	else if (traducteur.indexOf('BARNABAS_PERSEUS') != -1)
	{

		
		perseus_inter = ""
		
		textete = bible[line].replace(info[0]+" ","").split(' ')
		
		
		if (textete != "")
		{
			
			
			
			//CREATION TR SPAN
			for (s = 0 ; s != textete.length ; s++)
			{
				
					//console.log(textete)
					//console.log(textefr)
					
					//καὶ=καί4=conjonction,indéclinable
					
					if (textete[s].split('=')[2].match(/,/))
					{
						lem1 = textete[s].split('=')[2].split(',')[0];
						lem2 = textete[s].split('=')[2].replace(lem1+',',""); 
					}

					else
					{
						lem1 = textete[s].split('=')[2];
						lem2 = '-';
					}


					perseus_inter +=``+
					`<div class="int">`+
					`<span class="el">`+textete[s].split('=')[0]+`</span>`+
					//`<span class="fr">`+textefr[s]+`</span>`+
					`<span class="info">`+lem1+`</span>`+
					`<span class="subinfo">`+lem2+`</span>`+
					`<span class="lemme"><a target="_blank" href="../../lemme/`+textete[s].split('=')[1]+`.html">`+textete[s].split('=')[1]+`</a></span>`+
					`</div>`;


			}	
			
			//add tr
			data += `\n<tr id="bp`+chapitre+`_`+verset+`" style="display: none;"><td class="td1">BARNABAS_PERSEUS</td><td class="td2">80</td><td class="td3">`+perseus_inter+`</td></tr>`;
		
		}

	}	
	
	
	
	
	
	
	
	
	else if (traducteur.indexOf('BARNABAS_ANGEL') != -1)
	{

		angel_inter = ""
		
		textete = bible[line].replace(info[0]+" ","").split(' ')
		
		
		if (textete != "")
		{
			
			//CREATION TR SPAN
			for (s = 0 ; s != textete.length ; s++)
			{
				

					if (textete[s].split('=')[2].match(/,/))
					{
						lem1 = textete[s].split('=')[2].split(',')[0];
						lem2 = textete[s].split('=')[2].replace(lem1+',',""); 
					}

					else
					{
						lem1 = textete[s].split('=')[2];
						lem2 = '-';
					}


					angel_inter +=``+
					`<div class="int">`+
					`<span class="el">`+textete[s].split('=')[0]+`</span>`+
					//`<span class="fr">`+textefr[s]+`</span>`+
					`<span class="info">`+lem1+`</span>`+
					`<span class="subinfo">`+lem2+`</span>`+
					`<span class="lemme"><a target="_blank" href="../../lemme/`+textete[s].split('=')[1]+`.html">`+textete[s].split('=')[1]+`</a></span>`+
					`</div>`;


			}	
			
			//add tr
			data += `\n<tr id="ba`+chapitre+`_`+verset+`" style="display: none;"><td class="td1">BARNABAS_ANGEL</td><td class="td2">80</td><td class="td3">`+angel_inter+`</td></tr>`;
		
		}

	}	
	
	
	
	
	
	
	
	
	else if (traducteur.indexOf('PRIGENT') != -1)
	{
		

			data	+= 
			'<tr><td nowrap class="prigent" onclick="eimiv='+verset+';view(\''+lcv_prigent[xlcv]+'\');">'+traducteur+'</a></td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'

	}

	




	
	
	else
		data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'





	
	


	backlivre	= livre;
	backchap	= chapitre;
	backverset	= verset;
	
	}
	
	
	
	
	
}


		intro_ver='';
		for (nb=0 ; nb != backverset ; nb++)
		{
			nb_for = nb+1;
			intro_ver += '<a href="#V'+nb_for+'">V'+nb_for+'</a>&ensp;';
		}


		intros	=	intro;
		intros	+=	chbook+'<br><br>'+intro_ver
		intros	=	intros.replace('>'+'CH'+chapitre+'<','><b>[ CH'+chapitre+' ]</b><')


		//data = intro;

		fichier.writeFileSync(backlivre+'-'+backchap+'.html',intros+data+end, 'utf8');
		data = '';

