<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<form id="form">
    <input type="text" name="name" value="Jho Moreira">
    <input type="text" name="description" value="melhor lanche">
    <input type="file" name="photo" id="file">
</form>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">
    $('#file').on('change', function () {
        let formData = new FormData();
        formData.append('name', 'Margarita Hill');
        formData.append('description', 'Melhor Wiski da região');
        formData.append('photo', $('#file')[0].files[0]);
        let headers = {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjliYzY3MDVlMmNlNzE3Mjc0ZTNmYTcwMGFhNjYyNzAzZjRhNzgxYjVhOTIzMDJhZTRhNmRhOTQ1OTFkYzY4MGExOTZjOGNkNjU5OGQ4OGRmIn0.eyJhdWQiOiI0IiwianRpIjoiOWJjNjcwNWUyY2U3MTcyNzRlM2ZhNzAwYWE2NjI3MDNmNGE3ODFiNWE5MjMwMmFlNGE2ZGE5NDU5MWRjNjgwYTE5NmM4Y2Q2NTk4ZDg4ZGYiLCJpYXQiOjE1NDczMzU5NDIsIm5iZiI6MTU0NzMzNTk0MiwiZXhwIjoxNTc4ODcxOTQyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.wM0G2kv1zGZzQ0hOfjyGL3YxveJvKRIYquH9aUREKTcBmL2SzX3pgzJiMN03kwSc2USc_llSt_hCOD-PwGC-8_SOUamwdm5zSNNiJOgXkoDCiq1B5HXtkpoxNxv0_qWjSsg8qL55Uoqwrr4h0kIOjGJp5cyW_SiB9kpRyQ8HelOydDBGw_96MsaNgxZLjizG4d5I3sy-2dOcYWfz7IFcdR-R0x7sxIOVwYMvIY3APBnJj5vdOXfy7O3cfOZIAZNpKxopPDhGHT0ajEZ83pDy9jcAyJxiySEylyNqc7JxeE5vGKMAQS8jd74aSiwOz8CKJeMs8zmvfAAMMyJvcp9sbeCDWxZhq1tjEclt0lpBap3QU7BY_xcjSxqmbvPnbAzASGJqneSQpV-L-XmBYrertsudISOCVNbrzyVVOcqx0G8aMasc7M6qSR5634Pb9JOFipJX5-mM1G7qUKz9IUfiDl5imftqSl860zLP5fiWKzDFYegjycIFTN79i03GiB-2TvN1G6eXVu51Ria8yt-uKyBxa3oPw7lheiSjUeW9rkhydKlpc9mDEL8Bs2TLVM3FnnccMj5JPx2efjMsaqXUudnNhDkNy6i82vk8LPyN8wO3u5L2ceabS4CgzCkxclWRO2CYEP0I0nLWjofdZthKmeU4swmR0yxb5surLQqRiyY',
            //'content-type': 'multipart/form-data'
            'content-type': 'application/x-www-form-urlencoded'
        }
        axios.post('http://curso.local/restaurante/api/v1/restaurants/2', formData, {headers: headers})
    })
</script>
</body>
</html>