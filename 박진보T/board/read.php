<?php
    include "db.php";
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
  
    <title>Document</title>
</head>
<body>
    <?php
        $bno = $_GET['idx'];
        $hit = mysqli_fetch_array(mq("select * from board where idx='".$bno."'"));
        $hit = $hit['hit']+1;
        $fet = mq("update board set hit = '".$hit."' where idx='".$bno."'");

        $sql = mq("select * from board where idx='".$bno."'");
        $board = $sql->fetch_array();
    ?>

<div id="board_read">
    <h2><?php echo $board['title'];?></h2>
        <div>
            <?php echo $board['name'];?>
            <?php echo $board['date'];?>
           조회수 : <?php echo $board['hit'];?>
        </div>
        <div id="bo_content">
            <?php echo nl2br("$board[content]");?>
        </div>

    <div id="bo_ser">
        <ul>
            <li><a href="list.php">[목록]</a></li>
            <li><a href="modify.php?idx=<?php echo $board['idx'];?>">[수정]</a></li>
            <li><a href="del.php?idx=<?php echo $board['idx'];?>">[삭제]</a></li>
        </ul>
    </div>
</div>
    
</body>
</html>