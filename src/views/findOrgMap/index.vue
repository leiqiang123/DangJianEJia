<template>
    <div>
        <Header>流动党员找组织</Header>
        <div class="h44"></div>
        <div id="container" class="map"></div>
    </div>
</template>

<script>
    import Header from '../../components/header'
    import BMap from 'BMap'
    export default {
        components:{
            Header
        },
        methods: {
           
        },
        mounted () {
            var map = new BMap.Map("container"); 
            var point = new BMap.Point(116.404, 39.915); 
            map.centerAndZoom(point, 5);
            map.addControl(new BMap.NavigationControl({
                anchor:BMAP_ANCHOR_TOP_LEFT
            }));
            map.addControl(new BMap.GeolocationControl()); 
            var point = new BMap.Point(116.404, 39.915);
            var marker = new BMap.Marker(point);        // 创建标注    
            map.addOverlay(marker); 
        }
    }
</script>

<style scoped>
.map{
    height: 624px;
}
</style>