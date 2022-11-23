<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$username = trim($data['username']);
$password = md5(trim($data['password']));
$query = mysqli_query($koneksi,"SELECT * FROM tbl_users WHERE user_name='$username' AND user_password='$password'");
$jumlah = mysqli_num_rows($query);
if ($jumlah != 0) {
	$value = mysqli_fetch_object($query);
	$pesan['username'] = $value->user_name;
	$pesan['token'] = time().'_'.$value->user_password	;
	$pesan['status_login']= 'berhasil';
}else{
	$pesan['status_login']= 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
?>