<!DOCTYPE html>
<html lang="en">
    @include('template.header.header')
<body>
    <div id="wrapper">
        @include('template.menu.topbar');
        @include('template.menu.siderbar');
        <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            @include('template.contents.master')
            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->
    </div>
    <!-- END wrapper -->
    @include('template.footer.jslinks')
</body>
</html>