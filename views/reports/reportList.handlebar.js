<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        {{#each reportList}}
        <ul>
            <li>reportId:<span>{{this._id}}</span>
                <span>--------------</span>
                Reporter's userId : {{this.userId}}
                <span>--------------</span>
                postId : <a href="http://localhost:3000/posts/postInfo/{{this.postId}}"><span>{{this.postId}}</span></a>
                <span>--------------</span>
                Reason : {{this.reasons}}<br>
                <button class="deleteBtn">delete report</button>
                <button class="deleteBtnSuper">delete post </button>
            </li>
            <p>-----------------------------------------------------------------------------------------------------</p>
        </ul>
        {{/each}}
    </div>
</body>

</html>
<script>
    let deleteBtn = document.getElementsByClassName("deleteBtn");
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].onclick =function() {
            let dad = this.parentNode;
            let sonSpan = dad.getElementsByTagName("span");
            let reportId=sonSpan[0].innerText
            var xhr = new XMLHttpRequest();//创建 Ajax 对象
            xhr.open('post', 'http://localhost:3000/posts/removeReport');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') 
            xhr.send('reportId='+reportId);
            xhr.onload = function () {
                console.log(xhr.responseText);
                console.log(xhr.status);
                window.location.reload();
            }
        }
    }
    let deleteBtnSuper = document.getElementsByClassName("deleteBtnSuper");
    for (let i = 0; i < deleteBtnSuper.length; i++) {
        deleteBtnSuper[i].onclick =function() {
            let dad = this.parentNode;
            let sonSpan = dad.getElementsByTagName("span");
            let reportId=sonSpan[0].innerText
            let postId=sonSpan[3].innerText;
            console.log(reportId)
            console.log(postId)
            var xhr = new XMLHttpRequest();//创建 Ajax 对象
            xhr.open('post', 'http://localhost:3000/posts/removeReportAndPost');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') 
            xhr.send('reportId='+reportId+'&postId='+postId);
            xhr.onload = function () {
                console.log(xhr.responseText);
                console.log(xhr.status);
                window.location.reload();
            }
        }
    }

</script>