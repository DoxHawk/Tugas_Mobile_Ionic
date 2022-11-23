<?php 
require '../../koneksi.php';
$data = [];
$query = mysqli_query($koneksi,"select * from tbl_pesanan, tbl_menu where menu__id = menu_id");
while ($row = mysqli_fetch_object($query)) {
	$data[] = $row;
}
//tampilkan data dalam bentuk json
echo json_encode($data);
echo mysqli_error($koneksi);

?>