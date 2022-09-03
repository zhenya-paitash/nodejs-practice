import Excel from 'exceljs'

export async function writeInExcel(data) {}

export async function readFromExcel() {
  const wb = new Excel.Workbook()
  const ws = wb.addWorksheet('For Test')

  ws.addRows([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])

  ws.getColumn(1).eachCell(i => console.log(i.value))

  return ws
}

;(async () => {
  const data = readFromExcel()
})()
