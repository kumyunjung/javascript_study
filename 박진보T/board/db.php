<?php
    session_start(); // 세션시작 
    header('Content-Type:text/html;charset=utf-8'); //utf인코딩

    //DB주소, DB아이디, DB비번, DB명
    $db= new mysqli("localhost", "yuunjuun", "gmdals9278!", "yuunjuun");
    $db->set_charset("utf8"); //$db : 변수명

    function mq($sql)
    {
        global $db;
        return $db->query($sql);
    } //$sql을 함수 내에서 쓸 수 있도록
    


?>