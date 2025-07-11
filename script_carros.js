const dataSet = [
[1,'1','102','DDL080'],
[2,'9','401','JGV545'],
[3,'9','201','UCT684'],
[4,'10','601','UGW374'],
[5,'16','202','URW591'],
[6,'19','302','JLX790'],
[7,'16','102','CSU436'],
[8,'2','201','INM075'],
[9,'13','202','BLW820'],
[10,'12','601','DWQ105'],
[11,'13','601','CZN357'],
[12,'8','501','LUO026'],
[13,'6','602','CQM786'],
[14,'11','302','LIT543'],
[15,'3','302','DWM389'],
[16,'11','101','LMI124'],
[17,'4','302','EJP882'],
[18,'1','402','DWQ270'],
[19,'8','602','CJC321'],
[20,'20','502','JND66C'],
[21,'24','202','KGZ184'],
[22,'20','601','MKO179'],
[23,'22','602','JMX922'],
[24,'20','301','BYH074'],
[25,'18','102','RKO664'],
[26,'10','201','BKE440'],
[27,'2','101','MJX058'],
[28,'20','602','EJO602'],
[29,'21','202','RGL494'],
[30,'16','601','CDV934'],
[31,'24','501','CXZ697'],
[32,'24','601','TAT839'],
[33,'2','602','CZL798'],
[34,'22','201','JMU513'],
[35,'4','201','CZM297'],
[36,'20','401','RBO487'],
[37,'15','101','BSH723'],
[38,'19','101','JBL783'],
[39,'22','202','DCT657'],
[40,'3','501','CYT142'],
[41,'11','102','TGW597'],
[42,'18','501','LS0252'],
[43,'5','202','RAV932'],
[44,'17','601','DAX711'],
[45,'7','601','JRL944'],
[46,'3','101','EMQ192'],
[47,'2','502','EJN516'],
[48,'12','402','LOP485'],
[49,'17','501','CZX048'],
[50,'12','401','JLX735'],
[51,'6','302','PCM932'],
[52,'20','102','GHW634'],
[53,'14','101','RNQ854'],
[54,'7','501','WGO446'],
[55,'21','102','FPR563'],
[56,'5','301','MBM765'],
[57,'17','602','FZQ309'],
[58,'8','301','DDE436'],
[59,'11','501','KXV870'],
[60,'5','402','RNS862'],
[61,'3','402','RFX838'],
[62,'10','202','URY050'],
[63,'22','302','JJK642'],
[64,'16','302','RDR364'],
[65,'14','601','MJK371'],
[66,'19','301','JHO302'],
[67,'26','202','DDF927'],
[68,'9','602','LQS833'],
[69,'16','602','HCS349'],
[70,'6','101','RCK721'],
[71,'20','501','HZX673'],
[72,'23','401','LSO938'],
[73,'13','501','IVX500'],
[74,'2','401','WHS641'],
[75,'19','402','HFP435'],
[76,'10','401','EMV166'],
[77,'4','602','BPI330'],
[78,'15','102','EJM849'],
[79,'21','201','ZXX970'],
[80,'19','201','BOY170'],
[81,'1','501','KAV218'],
[82,'17','302','BPB087'],
[83,'22','402','KTR375'],
[84,'17','101','NHU577'],
[85,'18','101','EIQ787'],
[86,'4','501','DWN778'],
[87,'18','402','DNS616'],
[88,'3','301','DNN356'],
[89,'25','601','IXQ821'],
[90,'23','101','FXX551'],
[91,'3','502','FOT110'],
[92,'11','402','IWZ153'],
[93,'12','602','PPQ476'],
[94,'11','401','KYS976'],
[95,'3','602','CKI841'],
[96,'23','501','RBM525'],
[97,'22','401','GMX134'],
[101,'P','P','P'],
[102,'NO SE USA','NO SE USA','NO SE USA'],

];
 
dataSet.forEach(r => {
    var div1 = document.createElement('div');
    div1.innerHTML = r[1];
    r[1] = div1;
 
    var div3 = document.createElement('div');
    div3.innerHTML = r[3];
    r[3] = div3;
})
 
new DataTable('#carros', {
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