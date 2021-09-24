<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title inertia>{{ config('app.name') }}</title>

    <link rel="stylesheet" href="{{ mix('assets/css/app.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Recursive&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito&display=swap">

    @routes
    <script src="{{ mix('assets/js/app.js') }}" defer></script>
</head>
<body class="antialiased leading-tight">
    @inertia
</body>
</html>
