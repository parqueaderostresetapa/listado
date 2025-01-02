const dataSet = [
[1,'20','202','TME66G','DIC'],
[2,'25','301','ELECTRICA','DIC'],
[3,'16','201','FJY186','MAR'],
[4,'20','502','TNO39G','MAR'],
[5,'3','102','BUQ15G','MAY'],
[6,'9','601','PFB83F','MAY'],
[7,'7','101','FRG71G','MAR'],
[8,'17','602','NUEVA','MAR'],
[9,'2','202','YFU83C','ABR'],
[10,'1','602','QSJ22D','ABR'],
[11,'19','502','BVR53G','DIC'],
[12,'15','302','ART37D','DIC'],
[13,'2','501','DDC42E','FEB'],
[14,'12','301','RBK90G','FEB'],
[15,'5','101','DCM93H','FEB'],
[16,'4','601','SCH03F','FEB'],
[17,'13','201','HLY17G','ENE'],
[18,'21','501','VTL61C','ENE'],
[19,'15','502','STL71F','ENE'],
[20,'10','602','ELECTRICA','ENE'],
[21,'26','602','VKM20F','ABR'],
[22,'7','102','HRY98E','ABR'],
[100,'17','502','ELECTRICA','JUN'],
[101,'23','502','ELECTRICA','JUN'],
[999,'23','601','DPH51F','NOV'],
[999,'5','502','BGL89H','NOV'],
[999,'9','302','FSZ496','NOV'],
[999,'8','502','GIS81F','NOV'],





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