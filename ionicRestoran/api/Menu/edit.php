<?php
require '../../koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$menu_id = $data['menu_id'];
$menu_nama = $data['menu_nama'];
$menu_stok = $data['menu_stok'];
$menu_src = $data['menu_src'];

$query = mysqli_query($koneksi, "UPDATE tbl_menu SET menu_nama='$menu_nama',menu_stok='$menu_stok',menu_src='$menu_src' WHERE menu_id='$menu_id'");
// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';

// }

echo json_encode($pesan);
echo mysqli_error($koneksi);
