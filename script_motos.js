const dataSet = [
[1,'20','502','TNO39G'],
[2,'1','602','QSJ22D'],
[3,'8','502','GIS81F'],
[4,'10','502','IWB71F'],
[5,'3','102','BUQ15G'],
[6,'9','302','FSZ496'],
[7,'7','302','VEH13G'],
[8,'13','302','ZQS35F'],
[9,'15','502','STL71F'],
[10,'18','202','YRD87E'],
[11,'7','101','FRG71G'],
[12,'25','401','IYM98E'],
[13,'12','301','RBK90G'],
[14,'21','501','VTL61C'],
[15,'7','102','HRY98E'],
[16,'23','601','DPH51F'],
[17,'2','501','DDC42E'],
[18,'4','601','SCH03F'],
[19,'15','302','ART37D'],
[20,'9','601','PFB83F'],
[21,'2','202','YFU83C'],
[22,'13','201','HLY17G'],
[23,'17','502','ELECTRICA'],
[24,'23','502','ELECTRICA'],

	
	
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
        { title: 'Placa' }
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