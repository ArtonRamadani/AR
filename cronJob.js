const nodemailer = require("nodemailer");
let Costumer = require('../models/costumer');
let Orders = require('../models/orders');
const { QueryTypes, Sequelize } = require('sequelize');

const db = require('../config/db');

module.exports = async (userData, ordersForThisUser) => {
    console.log('ordersForThisUser', ordersForThisUser)

    // let foundUser = await Costumer.findOne({ where: { email_sent: 0 } });
    // console.log('foundUser123UUID', foundUser.uuid)
    // if (foundUser !== null) {
    // const ordersForThisUser = await await db.query(`select * from orders where order_id = ${foundUser.uuid}`);
    if (ordersForThisUser.length !== 0) {
        console.log('ordersForThisUser', ordersForThisUser)
        try {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'porosia.mtechnologie@gmail.com',
                    pass: 'klsvzshsoizxglut'
                }
            });
            let HelperOptions;
            HelperOptions = {
                from: '"" <porosia.mtechnologie@gmail.com>',
                to: userData.email,
                // cc: ccmail,
                subject: 'Porosia juaj është pranuar! ',
                html: `
                        <!DOCTYPE html>
                            <html>
                            <head>
                                <meta charset="utf-8" />
                                <title>Your receipt</title>
                                <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
                            </head>
                            <body style="background-color: lightgray" bgcolor="lightgray">
                                <!-- Main body table -->
                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: sans-serif">
                                    <tr>
                                        <td height="10px">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td align="center">
                                            <!-- Receipt table -->
                                            <table border="0" cellpadding="5" cellspacing="0" style="width: 320px; background-color: #f2f4f5">
                                                <tr>
                                                    <td style="width: 100%; background-color: rgb(54, 35, 160); text-align: center">
                                                        <img alt="m-technologie" width="50%" height="auto"
                                                            src="http://www.m-technologie.com/static/media/companyLogo.41159162cd2083dec641.png" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" style="color: rgb(54, 35, 160); font-size: x-large; font-weight: bolder">
                                                        Kërkesa juaj për ofertë është pranuar.
                                                    </td>
                                                </tr>
                                                <!-- Receipt items -->
                                                <tr>
                                                    <td>
                                                        <table>
                                                            <tr>
                                                                <td colspan="2" style="
                                                                    border-top-width: 1px;
                                                                    border-top-color: #e0e1e2;
                                                                    border-top-style: dashed;
                                                                    line-height: 0px;
                                                                    font-size: 0;
                                                                    border-collapse: collapse;
                                                                    padding: 0;
                                                                    "height="1">
                                                                    &nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2" height="5px"></td>
                                                            </tr>
                                                           
                                                            ${ordersForThisUser[0]?.map((el) => {
                                                                return (
                                                                         `
                                                                         <tr>
                                                                            <td width="101%" align="center">Shuco MV8, ${el?.selected_color}, ${el?.defined_height}x${el?.defined_width}cm, ${el?.selected_blinds}</td>
                                                                        </tr>
                                                                         `
                                                                        )
                                                            })}
                                                          
                                                        </table>
                                                    </td>
                                                </tr>
                                                
                                                <!-- Address -->
                                                <tr>
                                                    <td align="center">
                                                        <span style="font-weight: bold">Emri: ${userData?.name_surname}</span><br />
                                                        Adresa: ${userData?.address}<br />
                                                        Qyteti: ${userData?.city} <br />
                                                        Numri kontaktues: ${userData?.phone_number}
                                                    </td>
                                                </tr>
                                                <!-- Transaction table -->
                                                <tr>
                                                    <td align="center">
                                                        <table style="font-size: smaller; color: #85898c; width: 100%">
                                                            <tr>
                                                                <td colspan="2" style="
                                                                    border-top-width: 1px;
                                                                    border-top-color: #e0e1e2;
                                                                    border-top-style: dashed;
                                                                    line-height: 0px;
                                                                    font-size: 0;
                                                                    border-collapse: collapse;
                                                                    padding: 0;
                                                                " height="1">
                                                                    &nbsp;
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2" height="5px"></td>
                                                            </tr>
                                                           
                                                        </table>
                                                        <tr>
                                                               
                                                            
                                                        <td style="width: 100%; background-color: rgb(54, 35, 160); text-align: center">
                                                        <img alt="m-technologie" width="50%" height="auto"
                                                            src="http://www.m-technologie.com/static/media/companyLogo.41159162cd2083dec641.png" />
                                                    </td>








                                                        </tr>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                   
                                </table>
                            </body>

                            </html>
                `, // html body,
            };
            return transporter.sendMail(HelperOptions, async (error, info) => {
                console.log("HelperOptionsRamadani", HelperOptions)
                if (error) {
                    let changeEmailStatus = await db.query(`UPDATE costumers SET email_sent = 0 where uuid = ${userData?.uuid}`)
                    console.log("Email not sent", error);
                    // console.log(`Error during cronjob: ${error}; Time: ${new Date()};`)
                } else {
                    
                    console.log('userData', userData)
                    console.log('ordersForThisUser', ordersForThisUser)
                    // console.log('uuid', uuid)
                }
            });
        } catch (err) {
            // console.log('userData', userData)

            console.log(`Error during cronjob2: ${err}; Time: ${new Date()}`);
            return "Error";
        }
    }
}
// }
