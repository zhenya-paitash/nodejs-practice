import { GoogleSpreadsheet } from 'google-spreadsheet'
import fs from 'fs'

const GOOGLE_SS_ID = '1m8upb0G6zqqsy8e-__A-Ur4QvT1jWaqCQytgInVd6VU'

;(async () => {
  const doc = new GoogleSpreadsheet(GOOGLE_SS_ID)
  try {
    const { client_email, private_key } = JSON.parse(
      fs.readFileSync('./google-service-account-auth.json').toString()
    )
    await doc.useServiceAccountAuth({ client_email, private_key })
    await doc.loadInfo()

    const ss = doc.sheetsByIndex[0]
    // await ss.addRow({ ID: 1, USERNAME: 'JOHN DOE', PASSWORD: '123' })

    const rows = await ss.getRows()
    for (let row of rows) {
      const { ID, USERNAME, PASSWORD } = row
      console.log({ ID, USERNAME, PASSWORD })
    }
  } catch (e) {
    console.error(e)
  }
})()
