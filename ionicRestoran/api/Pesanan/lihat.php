<?php 
require '../../koneksi.php';
$data = [];
$pesanan_id = $_GET['id'];
$query = mysqli_query($koneksi,"select * from tbl_pesanan where pesanan_id ='$pesanan_id'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);

 ?>