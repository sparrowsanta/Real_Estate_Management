<!DOCTYPE html>
<%@ page language="Java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html lang="pl">
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script
            src="http://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"
    ></script>
    <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
            integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
            crossorigin="anonymous"
    ></script>
    <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossorigin="anonymous"
    />
    <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="css/login.css" type="text/css">
    <link rel="stylesheet" href="css/default.css" type="text/css">
    <title>Real Estate Managment</title>
</head>
<header>
    <div class="img-responsive view my-auto mx-auto"
         style="
        background-image: url('img/login.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      ">
        <div class="mask align-items-center">
            <div class="container">
                <div class="col-md-6 col-xl-5 mb-4">
                    <br/>
                    <div style="margin-top: 100px;"></div>
                    <div class="card">
                        <div class="card-body">
                            <div class="text-center">
                                <h3 style="color: black"><spring:message code="login.label.title"/></h3>
                                <hr class="hr-light"/>
                            </div>
                            <form
                                    method="post"
                                    action="${pageContext.request.contextPath}/login"
                            >
                                <div class="md-form">
                                    <em class="fas fa-user prefix white-text active"></em>
                                    <input
                                            type="text"
                                            id="userName"
                                            name="username"
                                            class="white-text form-control"
                                            autofocus
                                            autocomplete="off"
                                    />
                                    <label for="userName" class="active"
                                    ><spring:message code="login.label.username"/></label
                                    >
                                </div>
                                <div class="md-form">
                                    <em class="fas fa-lock prefix white-text active"></em>
                                    <input
                                            type="password"
                                            id="userPassword"
                                            name="password"
                                            class="white-text form-control"
                                    />
                                    <label for="userPassword"><spring:message code="login.label.password"/></label>
                                </div>
                                <div class="text-center mt-4">
                                    <button class="btn btn-dark" type="submit"><spring:message
                                            code="login.button.login"/></button>
                                    <hr class="hr-light mb-3 mt-4"/>
                                </div>
                            </form>
                        </div>
                        <div class="md-form mr-4 mb-4">
                            <a href="${pageContext.request.contextPath}/login?lang=en" class="float-right"
                               data-toggle="tooltip"
                               title="<spring:message code="login.linkTooltip.language.english"/>">
                                <img alt=
                                     <spring:message code="login.linkTooltip.language.english"/> src="img/en.png"
                                     width="30" height="30"/>
                            </a>
                            <a href="${pageContext.request.contextPath}/login?lang=pl" class="float-right mr-3"
                               data-toggle="tooltip"
                               title="<spring:message code="login.linkTooltip.language.polish"/>">
                                <img alt=
                                     <spring:message code="login.linkTooltip.language.polish"/> src="img/pl.png"
                                     width="30" height="30"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
</html>
