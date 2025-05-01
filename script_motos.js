const dataSet = [
[1,'13','101','ROU20G','DIC'],
[2,'9','601','PFB83F','DIC'],
[3,'24','402','GXK99E','MAR'],
[4,'23','502','ELECTRICA','MAR'],
[5,'16','201','FJY186','MAY'],
[6,'7','101','FRG71G','MAY'],
[7,'4','601','SCH03F','MAR'],
[8,'6','601','UPM46F','MAR'],
[9,'2','501','DDC42E','ABR'],
[10,'12','301','RBK90G','ABR'],
[11,'26','602','VKM20F','DIC'],
[12,'7','102','HRY98E','DIC'],
[13,'23','601','DPH51F','FEB'],
[14,'5','502','BGL89H','FEB'],
[15,'9','302','FSZ496','FEB'],
[16,'8','502','GIS81F','FEB'],
[17,'13','201','HLY17G','ENE'],
[18,'21','501','VTL61C','ENE'],
[19,'15','502','STL71F','ENE'],
[20,'10','602','ELECTRICA','ENE'],
[21,'2','202','YFU83C','ABR'],
[22,'1','602','QSJ22D','ABR'],
[23,'17','502','ELECTRICA','JUN'],
[24,'25','301','ELECTRICA','JUN'],
[999,'20','202','TME66G','MAY'],
[999,'5','101','DCM93H','MAY'],
[999,'19','502','BVR53G','MAY'],
[999,'15','302','ART37D','MAY'],
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