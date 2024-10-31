const dataSet = [
[1,'15','502','STL71F','DIC','82024'],
[2,'25','301','ELECTRICA','DIC','52024'],
[3,'16','201','FJY186','MAR','82024'],
[4,'20','502','TNO39G','MAR','92024'],
[5,'3','102','BUQ15G','MAY','102024'],
[6,'9','601','PFB83F','MAY','102024'],
[7,'7','101','FRG71G','MAR','82024'],
[8,'17','602','NUEVA','MAR','72024'],
[9,'2','202','YFU83C','ABR','82024'],
[9,'1','602','QSJ22D','ABR','102024'],
[10,'13','201','HLY17G','DIC','62024'],
[12,'21','501','VTL61C','DIC','52024'],
[13,'2','501','DDC42E','FEB','62024'],
[14,'12','301','RBK90G','FEB','72024'],
[15,'13','101','ROU20G','FEB','72024'],
[16,'4','601','SCH03F','FEB','62024'],
[17,'23','601','DPH51F','ENE','52024'],
[18,'5','502','BGL89H','ENE','92024'],
[19,'9','302','FSZ496','ENE','52024'],
[20,'8','502','GIS81F','ENE','92024'],
[21,'26','602','VKM20F','ABR','92024'],
[22,'7','102','HRY98E','ABR','92024'],
[23,'17','502','ELECTRICA','JUN','42024'],
[24,'23','502','ELECTRICA','JUN','42024'],
[999,'19','502','BVR53G','NOV','112024'],
[999,'15','302','ART37D','NOV','72024'],
[999,'20','202','TME66G','NOV','112024'],




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
        { title: 'ROTA' },
        { title: 'Ult_Rota' }
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