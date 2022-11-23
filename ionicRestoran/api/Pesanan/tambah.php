<?php 
require '../../koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$pesanan_menu = trim($data['pesanan_menu']);
$pesanan_user = trim($data['pesanan_user']);
$pesanan_qty = trim($data['pesanan_qty']);
if ($nim != '' and $nama != '' and $alamat != '') {
	$query = mysqli_query($koneksi,"INSERT INTO tbl_pesanan(pesanan_menu,pesanan_user,pesanan_qty) value ('$pesanan_menu','$pesanan_user','$pesanan_qty')");
}
// else{
// 	$query = mysqli_query($koneksi,"DELETE from mahasiswa where nim='$nim'");
// }
// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';
// }
echo json_encode($pesan);
echo mysqli_error($koneksi);
?>