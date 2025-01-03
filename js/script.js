const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

$(document).ready(function() {
  $('.faq__question').click(function(event) {
      $(this).toggleClass('active');
  });
  $('.news__list_item a').click(function(event) {
      $('.news__list_item a').removeClass('active');
      $(this).toggleClass('active');
  });
  $(".agency__button-special").hover(
    function() {
        $(".contact__walking-title").css({
            "color": "#76E41F",
            "transition": "color 0.3s ease-in-out"
        });
    },
    function() {
        $(".contact__walking-title").css({
            "color": "#3C3E40",
            "transition": "color 0.3s ease-in-out"
        });
    }
  );
})

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Initialize cursor position
let cursorX = 0;
let cursorY = 0;

// Move the cursor
function onMouseMove(e) {
  cursorX = e.clientX;
  cursorY = e.clientY;
  updateCursorPosition();
}

// Update cursor position during scrolling
window.addEventListener('scroll', updateCursorPosition);

// Update cursor position
function updateCursorPosition() {
  TweenMax.to($bigBall, 0.4, {
    x: cursorX - 15,
    y: cursorY - 15,
  });
  TweenMax.to($smallBall, 0.1, {
    x: cursorX - 5,
    y: cursorY - 7,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 4,
  });
}

function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  });
}
//SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER SWIPER //
new Swiper('.diagramm-container', {
  pagination: {
    el: '.diagramm-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.diagramm-button-right',
    prevEl: '.diagramm-button-left',
  },
});


new Swiper('.project-slider', {
  centeredSlides: true,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 20,
});


new Swiper('.cases-container', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    // When window width is <= 768px
    320: {
      slidesPerView: 1,
    },
    // When window width is <= 1024px
    1024: {
      slidesPerView: 2,
    },
    // Add more breakpoints as needed
  },
});

//HIGHCHART HIGHCHART HIGHCHART HIGHCHART HIGHCHART HIGHCHART HIGHCHART HIGHCHART HIGHCHART HIGHCHART HIGHCHART //
Highcharts.setOptions({
  colors: ['#7B8592', '#76E41F', '#FAA74B', '#FFF27F']
});  
// HIGHCHART1 HIGHCHART1 HIGHCHART1 HIGHCHART1 HIGHCHART1 HIGHCHART1 HIGHCHART1 HIGHCHART1 HIGHCHART1 HIGHCHART1//
Highcharts.chart('container1', {
    chart: {
      backgroundColor: '#232628',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      marginRight: 300 // Adjust this value to control the right margin
    },
    
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      itemStyle: {
        color: '#FFF', // Change this to your desired text color
        fontWeight: '400',
      },
      itemMarginTop: 10, // Adjust this value to set the desired gap/margin
      title: {
        text: 'Наличие домашних<br>животных', // Add your desired title here
        style: {
          color: '#FFF',
          fontFamily: 'PT Root UI',
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '36', // Adjust this value as needed
          paddingBottom: '60px',
        }
      }
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500 // Define the maximum width for mobile versions
        },
        chartOptions: {
          chart: {
            marginRight: 0 // Reset right margin for smaller screens
          },
          legend: {
            align: 'center', // Align legend to the center
            verticalAlign: 'bottom', // Place legend below the chart
            layout: 'horizontal', // Display the legend items horizontally
            title: {
              text: ''
            }
          },
          title: {
            text: 'Наличие домашних животных', // Add your desired title here
            style: {
              color: '#FFF',
              fontFamily: 'PT Root UI',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '30', // Adjust this value as needed
              paddingBottom: '20px',
            },
            align: 'left', // Align legend to the center

          },
        }
      }]
    },
    exporting: {
      enabled: false // Disable the exporting options including the context menu (burger menu)
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'none',
        dataLabels: {
          enabled: false
        },
        showInLegend: true,
        borderColor: null, // Set border color to null to remove it
        borderWidth: 0 // Set border width to 0 to remove it
      }
    },
    
    series: [{
      name: 'Пропорции',
      colorByPoint: true,
      data: [{
        name: 'Животных нет',
        y: 78,
      }, {
        name: 'Имеет собаку',
        y: 20.9,
      }, {
        name: 'Имеет щенка',
        y: 20.9,
      }, {
        name: 'Неизвестно',
        y: 20.9,
      }, {
        name: 'имеет котёнка',
        y: 20.9,
      }, {
        name: 'имеет кошку',
        y: 20.9
      }]
    }]
    
});
// HIGHCHART2 HIGHCHART2 HIGHCHART2 HIGHCHART2 HIGHCHART2 HIGHCHART2 HIGHCHART2 HIGHCHART2 HIGHCHART2 HIGHCHART2 //
Highcharts.chart('container2', {
  chart: {
    backgroundColor: '#232628',
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    marginRight: 300 // Adjust this value to control the right margin
  },
  
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    itemStyle: {
      color: '#FFF', // Change this to your desired text color
      fontWeight: '400',
    },
    itemMarginTop: 10, // Adjust this value to set the desired gap/margin
    title: {
      text: 'Наличие домашних<br>животных', // Add your desired title here
      style: {
        color: '#FFF',
        fontFamily: 'PT Root UI',
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '36', // Adjust this value as needed
        paddingBottom: '60px',
      }
    }
  },
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500 // Define the maximum width for mobile versions
      },
      chartOptions: {
        chart: {
          marginRight: 0 // Reset right margin for smaller screens
        },
        legend: {
          align: 'center', // Align legend to the center
          verticalAlign: 'bottom', // Place legend below the chart
          layout: 'horizontal', // Display the legend items horizontally
          title: {
            text: ''
          }
        },
        title: {
          text: 'Наличие домашних животных', // Add your desired title here
          style: {
            color: '#FFF',
            fontFamily: 'PT Root UI',
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '30', // Adjust this value as needed
            paddingBottom: '20px',
          },
          align: 'left', // Align legend to the center

        },
      }
    }]
  },
  exporting: {
    enabled: false // Disable the exporting options including the context menu (burger menu)
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'none',
      dataLabels: {
        enabled: false
      },
      showInLegend: true,
      borderColor: null, // Set border color to null to remove it
      borderWidth: 0 // Set border width to 0 to remove it
    }
  },
  
  series: [{
    name: 'Пропорции',
    colorByPoint: true,
    data: [{
      name: 'Животных нет',
      y: 78,
    }, {
      name: 'Имеет собаку',
      y: 20.9,
    }, {
      name: 'Имеет щенка',
      y: 20.9,
    }, {
      name: 'Неизвестно',
      y: 20.9,
    }, {
      name: 'имеет котёнка',
      y: 20.9,
    }, {
      name: 'имеет кошку',
      y: 20.9
    }]
  }]
});
// HIGHCHART3 HIGHCHART3 HIGHCHART3 HIGHCHART3 HIGHCHART3 HIGHCHART3 HIGHCHART3 HIGHCHART3 HIGHCHART3 HIGHCHART3 //
Highcharts.chart('container3', {
  chart: {
    backgroundColor: '#232628',
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    marginRight: 300 // Adjust this value to control the right margin
  },
  
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    itemStyle: {
      color: '#FFF', // Change this to your desired text color
      fontWeight: '400',
    },
    itemMarginTop: 10, // Adjust this value to set the desired gap/margin
    title: {
      text: 'Наличие домашних<br>животных', // Add your desired title here
      style: {
        color: '#FFF',
        fontFamily: 'PT Root UI',
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '36', // Adjust this value as needed
        paddingBottom: '60px',
      }
    }
  },
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500 // Define the maximum width for mobile versions
      },
      chartOptions: {
        chart: {
          marginRight: 0 // Reset right margin for smaller screens
        },
        legend: {
          align: 'center', // Align legend to the center
          verticalAlign: 'bottom', // Place legend below the chart
          layout: 'horizontal', // Display the legend items horizontally
          title: {
            text: ''
          }
        },
        title: {
          text: 'Наличие домашних животных', // Add your desired title here
          style: {
            color: '#FFF',
            fontFamily: 'PT Root UI',
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '30', // Adjust this value as needed
            paddingBottom: '20px',
          },
          align: 'left', // Align legend to the center

        },
      }
    }]
  },
  exporting: {
    enabled: false // Disable the exporting options including the context menu (burger menu)
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'none',
      dataLabels: {
        enabled: false
      },
      showInLegend: true,
      borderColor: null, // Set border color to null to remove it
      borderWidth: 0 // Set border width to 0 to remove it
    }
  },
  
  series: [{
    name: 'Пропорции',
    colorByPoint: true,
    data: [{
      name: 'Животных нет',
      y: 78,
    }, {
      name: 'Имеет собаку',
      y: 20.9,
    }, {
      name: 'Имеет щенка',
      y: 20.9,
    }, {
      name: 'Неизвестно',
      y: 20.9,
    }, {
      name: 'имеет котёнка',
      y: 20.9,
    }, {
      name: 'имеет кошку',
      y: 20.9
    }]
  }]
});




////////////////////////////////////////////////////////////////////////////FEATURE ///////////////////////////
var svg = d3.select("svg").on("touchmove mousemove", moved),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var sites = d3.range(50)
    .map(function(d) { return [Math.random() * width, Math.random() * height]; });

var voronoi = d3.voronoi()
    .extent([[-1, -1], [width + 1, height + 1]]);

var polygon = svg.append("g")
    .attr("class", "polygons")
  .selectAll("path")
  .data(voronoi.polygons(sites))
  .enter().append("path")
    .call(redrawPolygon);

var link = svg.append("g")
    .attr("class", "links")
  .selectAll("line")
  .data(voronoi.links(sites))
  .enter().append("line")
    .call(redrawLink);

var site = svg.append("g")
    .attr("class", "sites")
  .selectAll("circle")
  .data(sites)
  .enter().append("circle")
    .attr("r", 2.5)
    .call(redrawSite);

function moved() {
  sites[0] = d3.mouse(this);
  redraw();
}

function redraw() {
  var diagram = voronoi(sites);
  polygon = polygon.data(diagram.polygons()).call(redrawPolygon);
  link = link.data(diagram.links()), link.exit().remove();
  link = link.enter().append("line").merge(link).call(redrawLink);
  site = site.data(sites).call(redrawSite);
}

function redrawPolygon(polygon) {
  polygon
      .attr("d", function(d) { return d ? "M" + d.join("L") + "Z" : null; });
}

function redrawLink(link) {
  link
      .attr("x1", function(d) { return d.source[0]; })
      .attr("y1", function(d) { return d.source[1]; })
      .attr("x2", function(d) { return d.target[0]; })
      .attr("y2", function(d) { return d.target[1]; });
}

function redrawSite(site) {
  site
      .attr("cx", function(d) { return d[0]; })
      .attr("cy", function(d) { return d[1]; });
}
