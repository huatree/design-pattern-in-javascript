class TerminalExpression {
  constructor(data) {
    this.data = data
  }
  interpret(context) {
    if (context.indexOf(this.data) > -1) {
      return true
    }
    return false
  }
}
// 添加表达式判断符
class OrExpression {
  constructor(expr1, expr2) {
    this.expr1 = expr1
    this.expr2 = expr2
  }

  interpret(context) {
    return this.expr1.interpret(context) || this.expr2.interpret(context)
  }
}
class AndExpression {
  constructor(expr1, expr2) {
    this.expr1 = expr1
    this.expr2 = expr2
  }

  interpret(context) {
    return this.expr1.interpret(context) && this.expr2.interpret(context)
  }
}

// 获取对应表达式
// {1} 先设值
function getMaleExpression() {
  const robert = new TerminalExpression('Robert')
  const john = new TerminalExpression('John')
  return new OrExpression(robert, john)
}

function getMarriedWomanExpression() {
  const julie = new TerminalExpression('Julie')
  const married = new TerminalExpression('Married')
  return new AndExpression(julie, married)
}

// 判断语句断言
const isMale = getMaleExpression()
const isMarriedWoman = getMarriedWomanExpression()

// {2} 再判断
console.log('John is male? ' + isMale.interpret('John'))
console.log('Julie is a married women? ' + isMarriedWoman.interpret('Married Julie'))

/**
 * output:
 * John is male? true
 * Julie is a married women? true
 */

/**
 * title: 解释器模式
 * scene: 通过单一断言判断来组合出一些断言的提升。如解析二进制表达式断言的判断
 * concolusion: 提供对语言或语法的一些判断方式
 */
