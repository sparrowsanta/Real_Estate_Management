<!DOCTYPE html>
<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <title>MainPage</title>
    <!--    <link rel="stylesheet" href="../../resources/bootstrap-4.5.0-dist/css/bootstrap.css">
        <link rel="stylesheet" href="webapp/css/main.css">
        <link rel="stylesheet" href="../src/main/resources/gson-2.3.1.jar">-->
</head>
<body>
<section>
<%--Header--%>
    <header>
        <jsp:include page="/views/header.jsp"></jsp:include>
    </header>
</section>
<main>
    <section>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus lacinia lectus at consequat. In
            euismod risus eu ligula blandit, consectetur vulputate metus vehicula. Donec convallis condimentum arcu quis
            gravida. Nunc fermentum placerat lectus, non convallis orci faucibus in. Vestibulum imperdiet mi magna,
            vitae tristique ipsum venenatis id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sed lorem sagittis,
            viverra nisl eu, placerat mi.

            Maecenas non velit id elit faucibus porta. Quisque ullamcorper fringilla accumsan. Aenean libero arcu,
            vestibulum id risus vel, porttitor malesuada nisi. Quisque sollicitudin sem non libero ultricies venenatis.
            Quisque nec quam ac erat euismod hendrerit. Sed egestas sagittis mauris, eu aliquet ante viverra at. Duis
            pellentesque risus enim, sit amet pharetra nunc ornare nec. Proin tempor, leo et vestibulum volutpat, eros
            ex fringilla ligula, ac sodales elit nisl ut augue. Nullam posuere magna nec eros tristique tristique. Fusce
            in ultricies diam, in interdum nunc. Etiam semper venenatis magna, vel consequat ante semper quis. Donec
            nisl ante, suscipit et metus placerat, scelerisque semper nibh.

            Nullam sollicitudin lacus dui, vitae tempor leo lacinia ornare. Suspendisse ut dictum purus, et ornare
            justo. Nam mattis sed orci ac venenatis. Integer odio sapien, tempor vel porttitor vitae, sollicitudin nec
            velit. Sed congue faucibus eleifend. Etiam eget lorem porta, semper ex nec, facilisis tellus. Integer sem
            elit, maximus sit amet risus facilisis, malesuada ullamcorper tortor. In aliquam quam sed ipsum convallis
            auctor. Fusce at lacus id felis dignissim malesuada. Etiam vel viverra orci, congue viverra neque. In
            pellentesque pretium neque nec mollis. Mauris augue eros, faucibus non dui sit amet, tempus pellentesque
            eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus tempus
            magna eget fermentum maximus. Phasellus fermentum, ipsum a ornare ultrices, tellus augue eleifend arcu, id
            accumsan arcu est non sapien.

            Integer libero massa, accumsan vitae magna non, commodo luctus metus. Etiam feugiat neque ac tellus ornare
            faucibus. Etiam in velit vel massa interdum vulputate. Fusce eget ornare nulla, sed convallis enim. Sed ac
            maximus est, in blandit felis. In convallis tincidunt est, malesuada fermentum ex consequat sit amet.
            Phasellus non justo imperdiet, aliquet erat non, fringilla ipsum. Ut lacinia tincidunt commodo. Nunc ac est
            erat.

            Curabitur arcu sem, commodo a congue vitae, mattis et lorem. In dolor velit, finibus in sollicitudin non,
            viverra vel felis. Ut lobortis et velit eget dictum. Proin volutpat, lacus vel semper fringilla, arcu leo
            facilisis ex, ac vulputate quam enim vitae neque. Aliquam erat volutpat. Nullam eget arcu pretium, lacinia
            enim porttitor, rutrum felis. Vestibulum gravida odio id nibh sagittis gravida. In euismod quam ipsum, at
            suscipit dui gravida ornare. Nulla eu ultricies velit, at posuere neque. Suspendisse in felis sed velit
            pharetra vehicula eu non magna. Vivamus quis hendrerit neque. Suspendisse eu arcu purus.
        </div>
        <div class="chart" >
            <img src="img/chart.jpeg" width="1080" height="760" align="center">
        </div>
    </section>
</main>

<!-- Footer -->
<footer class="page-footer font-small blue">
    <jsp:include page="/views/footer.jsp"></jsp:include>
</footer>
</body>
</html>