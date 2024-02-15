const dataSet = [
['1','20','502','TNO39G',' '],
['2','21','601','KSP51G','ANDRES FELIPE DUEÑAS '],
['3','','PENDIENTE ASIGNACION','',' '],
['4','10','502','IWB71F','MILENA PINEDA COMBITA '],
['5','9','601','PFB83F',' '],
['6','9','302','FSZ496','GINETH VIZCAYA '],
['7','7','302','VEH13G','LINETH MARCELA MANRIQUE '],
['8','13','302','ZQS35F',' '],
['9','15','502','STL71F',' '],
['10','1','602','QSJ22D','JONATHAN BRAYAN ROZO SILVA '],
['11','14','201','MSP94F',' '],
['12','25','401','IYM98E','MIGUEL ANTONIO FIGUEROA '],
['13','12','301','RBK90G','ANA CECILIA DIAZ PEDRAZA '],
['14','21','501','VTL61C','CLAUDIA PILAR FAJARDO GOMEZ '],
['15','7','102','HRY98E','EFIGENIA ARDILA ARDILA '],
['16','23','601','DPH51F','EDILBERTO PEÑA VILLALOBOS '],
['17','2','501','DDC42E','SANDRA PATRICIA MORENO R '],
['18','4','601','SCH03F','CLARA INES RODRIGUEZ ORTEGA '],
['19','15','302','ART37D','RAFAEL SANCHEZ '],
['20','19','502','BVR53G','GEOVANNY ZERRATE '],
['21','2','202','YFU83C','ALBA LEONOR ACOSTA MUNAR '],
['22','13','201','HLY17G','RAFAEL CHAPARRO '],
['M1','20','202','TME66G','MANUEL GONZALEZ RODR]GUEZ '],
['M2','23','502','ELECTRICA','LORENA GUERRERO '],
	
	
	
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
        { title: 'Usuario' }
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