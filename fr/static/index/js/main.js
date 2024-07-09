$(document).ready(function(){if($("img.lazy").length){new LazyLoad({})};});window.addEventListener('load',function(){new FastClick(document.body);},false);var searchB=document.getElementById('searchB')
function cateBox(){$('.categoryBox').addClass('act')}
$('.categoryBox').click(function(e){if(e.currentTarget===e.target||e.target.className=='close'||e.target.className=='iconfont icon-close'){$('.categoryBox').removeClass('act');}})
function search(){if($("#searchA").length>0){var keyword=$('#searchB').val().trim()||$('#searchA').val().trim();if(!keyword){layer.alert('请输入搜索内容')
return false}else{window.location.href='/search/'+keyword;}}else{var keyword=$('#searchB').val().trim()
if(!keyword){layer.alert('请输入搜索内容')
return false}else{window.location.href='/search/'+keyword;}}}
$("#searchB").keydown(function(e){if(e.keyCode==13){search();}});$("#searchA").keydown(function(e){if(e.keyCode==13){search();}});