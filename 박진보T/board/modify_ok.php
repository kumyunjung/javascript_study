<?php
include "db.php";

$bno = $_GET['idx'];
$title = $_POST['title'];
$name = $_POST['name'];
$pw = $_POST['pw'];
$content = $_POST['content'];

$sql=mq("update board set name='".$name."',title='".$title."',pw='".$pw."',content='".$content."' where idx='".$bno."'");

?>

<script>
alert("수정되었습니다.");
location.href="read.php?idx=<?php echo $bno;?>";
</script>