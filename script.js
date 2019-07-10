// var printPDF = function printPDF() {
// 	var quality = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
// 	var filename = 'GerarPDF.pdf';
// 	html2canvas(document.querySelector('.container'), { scale: quality },{
// 		onrendered: function (canvas)  {	
// 			var pdf = new jsPDF('p', 'mm', 'a4');
// 			// pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
// 			pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 0, 0);
// 			pdf.save(filename);
// 		}});
// };

var printPDF = function printPDF() {
	var quality = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var filename = 'GerarPDF.pdf';
	html2canvas(document.querySelector('.container'), { scale: quality }).then(function (canvas) {	
		var pdf = new jsPDF('p', 'mm', 'a4');
		//pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
		pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 0, 0);
		pdf.save(filename);
	});
};