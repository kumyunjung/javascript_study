<?php
include "db.php";

$title = $_POST['title'];
// echo $title;
$name = $_POST['name'];
// echo $name;
$content = $_POST['content'];
// echo $content;
$pw = $_POST['pw'];
// echo $pw;
$date = date('Y-m-d');
// echo $date;

$sql=mq("insert into board(title,name,content,pw,date,hit)
values('".$title."','".$name."','".$content."','".$pw."','".$date."',0)");

echo "<script>
alert('글쓰기가 완료되었습니다.');
location.href='list.php';</script>";
//주석
?>
