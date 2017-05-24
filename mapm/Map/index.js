window.onload =function(){
	//创建地图实例
	var map =new BMap.Map("container");
	//天安门坐标
	var point = new BMap.Point(116.403963,39.915119);
	map.centerAndZoom(point,12);
	map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    //滚动放大
     map.enableScrollWheelZoom()
    //创建标注
    var marker = new BMap.Marker(point);
    marker.enableDragging();
    //本地搜索
    var local = new BMap.LocalSearch(map, {
        renderOptions: {map: map}
    });
    local.search('北京市');
    
    //驾车路线
    var car = new BMap.DrivingRoute(map, {
        renderOptions: {
            map: map,
            autoViewport: true
        }
    });
    //步行路线
    var walking = new BMap.WalkingRoute(map, {
        renderOptions: {
            map: map
        }
    });
    //公交路线
    var bus = new BMap.TransitRoute(map, {
        renderOptions: {map: map, panel: "results"}
    });
    $(function () {
        // 地址搜索
        $('#city').on('click', function () {
            $('.mapShow').slideToggle();
            local.search($('#local').val());
        })
        // 行车
        $('#search').on('click', function () {
            $('.mapShow').slideToggle();
            car.search($('#star').val(), $('#end').val());
        })
        // 公交
        $('#bus').on('click', function () {
            $('.mapShow').slideToggle();
            bus.search($('#bStar').val(), $('#bEnd').val());
        })
        // 步行
        $('#walk').on('click', function () {
            $('.mapShow').slideToggle();
            walking.search($('#wStar').val(), $('#wEnd').val());
        })
    })

    $("#show").on('click', function () {
        $('.mapShow').slideToggle();
       
    })
}
