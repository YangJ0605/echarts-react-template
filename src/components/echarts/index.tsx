import { memo } from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'
// import * as echarts from 'echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'

import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/axis'

type IProps = {
  option: {
    [key: string]: any
  }
}
export default memo(function Echarts(props: IProps) {
  const { option } = props

  return <ReactEchartsCore option={option} echarts={echarts} />
})
