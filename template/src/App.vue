<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	&:before, &:after { box-sizing: inherit; }
}
html, body{
	width: 100%;
	height: 100%;
}
body{
  color: #212121;
	background: #fff;
	line-height: 1.5;
	font-family: 'Open Sans', Arial, Helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

