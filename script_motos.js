const dataSet = [
[1,'17','401','LCA97G','OCT'],
[2,'4','601','PZB07H','OCT'],
[3,'19','502','BVR53G','MAR'],
[4,'23','601','DPH51F','MAR'],
[5,'9','601','PFB83F','MAY'],
[6,'15','201','BYJ37G','MAY'],
[7,'10','302','XHC46F','MAR'],
[8,'11','101','MZB85H','MAR'],
[9,'15','502','STL71F','ABR'],
[10,'5','102','ELECTRICA','ABR'],
[11,'26','602','VKM20F','OCT'],
[12,'2','501','DDC42E','OCT'],
[13,'13','102','BAG14D','FEB'],
[14,'25','101','HII28I','FEB'],
[15,'13','201','HLY17G','FEB'],
[16,'6','601','UPM46F','FEB'],
[17,'16','201','FJY186','ENE'],
[18,'12','301','RBK90G','ENE'],
[19,'5','502','BGL89H','ENE'],
[20,'3','401','YRB16H','ENE'],
[21,'7','102','HRY98E','ABR'],
[22,'11','501','NAT93H','ABR'],
[100,'17','502','ELECTRICA','JUN'],
[101,'25','301','ELECTRICA','JUN'],
];
 
dataSet.forEach(r => {
    var div1 = document.createElement('div');
    div1.innerHTML = r[1];
    r[1] = div1;
 
    var div3 = document.createElement('div');
    div3.innerHTML = r[3];
    r[3] = div3;
})
 
new DataTable('#motos', {
    columns: [
        { title: '#Parq.' },
        { title: 'Interior' },
        { title: 'Apto' },
        { title: 'Placa' },
        { title: 'ROTA' }
    ],
	language: {
        search: 'Buscar:',
		emptyTable: "No hay información",
		zeroRecords: "Sin resultados encontrados",
		lengthMenu: "Mostrando _MENU_ Registros",
		infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
        infoFiltered: "(Filtrado de _MAX_ total entradas)",
		info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
    },
	 order: [[0, 'asc']],
	 pageLength: 100,
    data: dataSet
});