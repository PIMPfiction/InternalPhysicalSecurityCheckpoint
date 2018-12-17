/*Dashboard2 Init*/
"use strict";

/*****E-Charts function start*****/
var echartsConfig = function() {
	if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var dataBJ = [
			[5,6,9,2,8,7,1,1],
			[6,4,5,1,8,9,6,2],
		];

		var dataGZ = [
			[10,10,10,10,10,10,10,1],
			[6,4,5,1,8,9,7,2],
		];

		var dataSH = [
			[10,10,10,10,10,10,10,1],
			[6,4,5,1,8,9,7,2],
		];

		var lineStyle = {
			normal: {
				wiDth: 1,
				opacity: 0.5
			}
		};

		var option = {
			legend: {
				bottom: 5,
				data: ['Dt1', 'Dt2', 'Dt3'],
				itemGap: 20,
				textStyle: {
					color: '#878787',
					fontSize: 12
				},
				selectedMode: 'single'
			},
			radar: {
				indicator: [
					{name: 'Gozlem', max: 10},
					{name: 'Kaygi', max: 10},
					{name: 'Iletisim', max: 10},
					{name: 'Ekip Ruhu', max: 10},
					{name: 'Motivasyon', max: 10},
					{name: 'Mukavemet', max: 10},
					{name: 'Enerji', max: 10}
				],
				shape: 'circle',
				splitNumber: 5,
				name: {
					textStyle: {
						color: '#878787'
					}
				},
				splitLine: {
					lineStyle: {
						color: [
							'rgba(33, 33, 33, 0.1)', 'rgba(33, 33, 33, 0.1)',
							'rgba(33, 33, 33, 0.1)', 'rgba(33, 33, 33, 0.1)',
							'rgba(33, 33, 33, 0.1)', 'rgba(33, 33, 33, 0.1)'
						].reverse()
					}
				},
				splitArea: {
					show: false
				},
				axisLine: {
					show:false
				},
			},
			series: [
				{
					name: 'Dt1',
					type: 'radar',
					lineStyle: lineStyle,
					data: dataBJ,
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#ff6300'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.1
						}
					}
				},
				{
					name: 'Dt2',
					type: 'radar',
					lineStyle: lineStyle,
					data: dataSH,
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#e58b25'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.05
						}
					}
				},
				{
					name: 'Dt3',
					type: 'radar',
					lineStyle: lineStyle,
					data: dataGZ,
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#f8b32d'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.05
						}
					}
				}
			]
		};
		eChart_1.setOption(option);
		eChart_1.resize();
	}
}

/*****Sparkline function start*****/
var sparklineLogin = function() {
		if( $('#sparkline_4').length > 0 ){
			$("#sparkline_4").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
				type: 'line',
				width: '100%',
				height: '45',
				lineColor: '#ff6300',
				fillColor: '#ff6300',
				minSpotColor: '#ff6300',
				maxSpotColor: '#ff6300',
				spotColor: '#ff6300',
				highlightLineColor: 'rgba(0, 0, 0, 0.6)',
				highlightSpotColor: '#ff6300'
			});
		}
		if( $('#sparkline_5').length > 0 ){
			$("#sparkline_5").sparkline([0,2,8,6,8], {
				type: 'bar',
				width: '100%',
				height: '45',
				barWiDth: '10',
				resize: true,
				barSpacing: '10',
				barColor: '#ff6300',
				highlightSpotColor: '#ff6300'
			});
		}
}
/*****Sparkline function end*****/

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);

	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize();
/*****Resize function end*****/

/*****Function Call start*****/
sparklineLogin();
echartsConfig();
/*****Function Call end*****/
