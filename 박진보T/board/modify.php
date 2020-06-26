<?php
    include "db.php";

    $bno = $_GET['idx'];
    $sql = mq("select * from board where idx='$bno';");
    $board = $sql->fetch_array();
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="board_write">
        <h1>게시판</h1>
        <div id="write_area">
        <form action="modify_ok.php?idx=<?php echo $bno;?>" method="post">      
            <div id="in_title">
                제목 : <input type="text" name="title" required placeholder="제목을 입력하세요" value="<?php echo $board['title'];?>">
            </div>

            <div id="in_name">
                이름 : <input type="text" name="name" required placeholder="이름을 입력하세요" value="<?php echo $board['name'];?>">
            </div>

            <div id="in_content">
                <textarea name="content" id="" cols="50" rows="5" required placeholder="내용을 입력하세요" ><?php echo $board['content'];?></textarea>
            </div>

            <div id="in_pw">
                <input type="password" name="pw" required placeholder="비밀번호를 입력하세요" > 
            </div>

            <div>
                <button type="submit">글수정</button>
            </div>
        </form>  
        </div>
    </div>
</body>
</html>