var elt = document.getElementById("calculator");
      var calculator = Desmos.GraphingCalculator(elt, {
        keypad: false,
        expressions: false,
        zoomButtons: false,
        projectorMode: true,
        settingsMenu: false,
        expressions: false,
        showGrid: false,
        showXAxis: false,
        showYAxis: false,
        xAxisNumbers: false,
        yAxisNumbers: false,
      });
      calculator.setExpression({
          id: "exp1",
          latex: "c\ =\ d\({\\pi} /{4})"
        })
      calculator.setExpression({
        id: "exp2",
        latex: "b=\[0...24\]"
      })      
      calculator.setExpression({
          id: "exp3",
          latex: "a\ =\ b\({\\pi}/{14})"
        })
      calculator.setExpression({
        id: "exp4",
        latex: "d=[1...4]"
      })

      calculator.setExpression({
        id: "1",
        latex: "y^{2}\ +\ x^{2\ }<=\ 2.5^{2}",
        color: "#E8AE35",
      });
      calculator.setExpression({ 
        id: 'background-basket', 
        latex: '(x^2) + (y^2) <= 7^2\\\{(x^2+y^2) >= 5^2\\\}',
        color: '#F29B38'
      });
      calculator.setExpression({
        id: "2",
        latex: "y^{2}\ +\ x^{2\ }=\ 2.5^{2}",
        color: "#F25738",
      });

      calculator.setExpression({ 
        id: 'yella', 
        latex: 'x < x+1',
        color: '#E8AE35'
      });

      calculator.setExpression({ 
        id: 'basket', 
        latex: '\\\abs(x(\\\cos(a))-y(\\\sin(a)))+\\\abs(x(\\\sin(a))+(y(\\\cos(a))))=7',
        color: '#F25738'
      });
      calculator.setExpression({ 
        id: 'basket-inv', 
        latex: '\\\abs(x(\\\cos(a))+y(\\\sin(a)))+\\\abs(-x(\\\sin(-a))+(y(\\\cos(-a))))=7',
        color: '#F25738'
      });
      calculator.setExpression({ 
        id: 'basket1', 
        latex: '\\\abs(x(\\\cos(a))-y(\\\sin(a)))+\\\abs(x(\\\sin(a))+(y(\\\cos(a))))=5',
        color: '#DB763E'
      });
      calculator.setExpression({ 
        id: 'basket2', 
        latex: '\\\abs(x(\\\cos(a))-y(\\\sin(a)))+\\\abs(x(\\\sin(a))+(y(\\\cos(a))))=3.55',
        color: '#F29B38'
      });
      calculator.setExpression({ 
        id: 'x-line', 
        latex: 'x=0 \\\{ x^2 +y^2 <= 11.25^2 \\\}',
        color: '#F25738'
      });
      calculator.setExpression({ 
        id: 'y-line', 
        latex: 'y=0 \\\{ x^2 +y^2 <= 11.25^2 \\\}',
        color: '#F25738'
      });
      calculator.setExpression({ 
        id: 'circle-outline2', 
        latex: '(x^2) + (y^2) = 4.985^2',
        color: '#F25738'
      });
      calculator.setExpression({ 
        id: 'circ__out', 
        latex: 'x^2 + y^2 = 3^2',
        color: '#DB763E'
      });
      calculator.setExpression({ 
        id: 'circ__out2', 
        latex: 'x^2 + y^2 = 4.25^2',
        color: '#F25738'
      });
      calculator.setExpression({ 
        id: 'circ__out3', 
        latex: 'x^2 + y^2 = 6^2',
        color: '#F53641'
      });
      calculator.setExpression({ 
        id: 'circ', 
        latex: 'x^2 + y^2 = 3.55^2',
        color: '#DB763E'
      });
      calculator.setExpression({ 
        id: 'atom', 
        latex: '{(x\\\cos(d)-y\\\sin(d))^{2}}{25}+{(x\\\sin(d)+y\\\cos(d))^{2}}{9}=55',
        color: '#DB763E'
      });
      calculator.setExpression({
        id: "circle-outline",
        latex: "(x(\\\cos(c))-y(\\\sin(c)))^{2}+(x(\\\sin(c))+y(\\\cos(c)))^{2} = 49",
        color: "#DB763E",
      });
      calculator.setExpression({ 
        id: 'big-outline', 
        latex: 'x^{2}+y^{2}=11.25^{2}',
        color: '#DB763E'
      });


      var thumbnail = calculator.screenshot({
        width: 200,
        height: 200,
        targetPixelRatio: 2
      });
      console.log(thumbnail)
      var img = document.createElement('img');
      img.width = 200;
      img.height = 200;
      img.src = thumbnail;
      document.body.appendChild(img);
