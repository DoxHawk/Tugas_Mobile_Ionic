<?php 
require '../../koneksi.php';
$input = file_get_contents('php://input');
$pesan =[];

$pesanan_id = $_GET['pesanan_id'];
$query = mysqli_query($koneksi,"DELETE FROM tbl_pesanan WHERE pesanan_id='$pesanan_id'");
if ($query) {
	http_response_code(201);
	$pesan['status'] = 'sukses';
}else{
	http_response_code(422);
	$pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);

 ?>