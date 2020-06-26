<?php 
include "db.php";
?>
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>게시판</title>
</head>
<body>
    <div id="board_area">
    <h1>게시판</h1>
        <table>
            <thead>
                <tr>
                    <th width="50">번호</th>
                    <th width="300">제목</th>
                    <th width="80">이름</th>
                    <th width="120">날짜</th>
                    <th width="70">조회수</th>
                </tr>
            </thead>

            <?php
            $sql=mq("select * from board order by idx desc limit 0,5"); //0,5 = 5개 노출
            while($board=$sql->fetch_array())
            //레코드값을 변수 board로 지정해서 반복
            {

           
            ?>

            <tbody>
                <tr>
                    <td><?php echo $board['idx'];?></td>
                    <td><a href="read.php?idx=<?php echo $board['idx'];?>"><?php echo $board['title'];?></a></td>
                    <td><?php echo $board['name'];?></td>
                    <td><?php echo $board['date'];?></td>
                    <td><?php echo $board['hit'];?></td>
                </tr>            
            </tbody> 
            <?php
             }
            ?>
        </table>
        <div id="write_btn">
            <a href="write.php"><button>글쓰기</button></a>            
        </div>    
    </div>
</body>
</html>