import { Button } from '@/components/ui/button'
import Image from 'next/image';
import React from 'react'
import EnergyEfficiency from '../components/customComponents/EnergyEfficiency';

const checks: string[] = [
  "Buy 5 Premium Checks £29.88",
  "Buy 5 Premium Checks £23.88",
  "Buy 5 Premium Checks £11.93",
]

export default function SampleReport() {
  return (
    <section>
      <main className="py-12 px-4 md:px-12 lg:px-12">
        <div className="3-buttons block md:flex justify-between space-y-4 md:space-y-0 md:gap-x-4 xl:gap-x-12 mb-12">
          {checks.map((checkValue, index) => (
            <Button key={index} 
            className='bg-ccOrange font-montserrat font-semibold md:text-sm lg:text-base text-center py-6 md:py-8 md:w-1/3 w-full'>
              {checkValue}
            </Button>
          ))}
        </div>

        <div className="warning bg-[#BA3232] w-full text-center rounded-lg">
          <div className='py-8 text-white gap-2 leading-relaxed'>
            <p>!! WARNING !!</p>
            <p>Category N total loss claim Non Structural Damage</p>
            <p>See the Condition Details</p>
          </div>
        </div>

        <div className="overview-sector w-full">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Overview </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <table className="flex flex-col">
            <tbody className='shadow-lg mt-2 border-collapse'>
              {overview.map((item, index) => (
              <tr className="flex group cursor-pointer border border-gray-200 rounded-none" key={index}>
                <td className="reportValue1">{item.value1}</td>
                <td className="reportValue2">{item.value2}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prev-keeper-sector w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> {`Previous Keeper's History`} </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <table className="flex flex-col">
            <thead className='mt-2 border-collapse'>
              <tr className="flex group cursor-pointer border border-b-gray-500 border-gray-200 rounded-none">
                <td className="reportHeadValue">Date of Transaction </td>
                <td className="reportHeadValue"> No of Previous Keeper </td>
                <td className="reportHeadValue">Date of Last Keeper Change </td>
              </tr>
            </thead>
            <tbody className='shadow-lg border-collapse'>
              {prevKeeperData.map((item, index) => (
              <tr key={index} className="flex group cursor-pointer border border-gray-200 rounded-none">
                <td className="reportValue1">{item.value1}</td>
                <td className="reportValue1">{item.value2}</td>
                <td className="reportValue1">{item.value3}</td>
              </tr>
              ))} 
            </tbody>
          </table>
        </div>

        <div className="plate-change-sector w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Plate Change History </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <div className="reportValueFull ">
            <p className="py-4">There is no Plate Change History record against this vehicle.</p>
          </div>
        </div>

        <div className="outstanding-sector w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Outstanding Financial Details </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <div className="reportValueFull ">
            <p className="py-4">There is no Finance record against this vehicle.</p>
          </div>
        </div>

        <div className="High-risk-sector w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> High Risk Record Details </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <div className="reportValueFull ">
            <p className="py-4">There is no Finance record against this vehicle.</p>
          </div>
        </div>

        <div className="Condition-write-off-sector w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Condition Write-off Details </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <div className="reportValueFull overflow-x-auto">
            <table dir="ltr" className="shadow-lg border-collapse 
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full">
              <thead className="text-center !text-black font-raleway font-medium text-sm md:text-base
              ">
                  <tr>
                      <td className="border px-6 py-4 md:py-6">Date Removed</td>
                      <td className="border px-6 py-4 md:py-6">Theft Indicator</td>
                      <td className="border px-6 py-4 md:py-6">Loss Type</td>
                      <td className="border px-6 py-4 md:py-6">MIAF Entry Date</td>
                      <td className="border px-6 py-4 md:py-6">Loss Date</td>
                      <td className="border px-6 py-4 md:py-6">Date of Transactions</td>
                      <td className="border px-6 py-4 md:py-6">Insurer Branch</td>
                      <td className="border px-6 py-4 md:py-6">Insurer Code</td>
                      <td className="border px-6 py-4 md:py-6">Model</td>
                      <td className="border px-6 py-4 md:py-6">Make</td>
                  </tr>
              </thead>

              <tbody>
                  <tr className="text-center font-medium font-montserrat border text-sm md:text-base">
                      <td className="border pt-4 pb-8">0001-01-01 T00:00:00</td>
                      <td className="border pt-4 pb-8">78</td>
                      <td className="border pt-4 pb-8">0</td>
                      <td className="border pt-4 pb-8">2022-02-21 T00:00:00</td>
                      <td className="border pt-4 pb-8">2022-01-21T 00:00:00</td>
                      <td className="border pt-4 pb-8">2022-01-21T 00:00:00</td>
                      <td className="border pt-4 pb-8">None</td>
                      <td className="border pt-4 pb-8">None</td> 
                      <td className="border pt-4 pb-8">IX3</td> 
                      <td className="border pt-4 pb-8">HYUN</td> 
                  </tr>
              </tbody>           
            </table> 
          </div>
        </div>

        <div className="Color Change w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Color Change Details </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <div className="reportValueFull ">
            <p className="py-4">There is no Color Change record against this vehicle.</p>
          </div>
        </div>

        <div className="Police Stolen Record w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Police Stolen Record Details </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <div className="reportValueFull ">
            <p className="py-4">No Police Stolen record against this vehicle.</p>
          </div>
        </div>

        <div className="Basic Checks w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Basic Checks </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <table className="flex flex-col">
            <tbody className='shadow-lg mt-2 border-collapse'>
              {basicChecks.map((item, index) => (
              <tr className="flex group cursor-pointer border border-gray-200 rounded-none" key={index}>
                <td className="reportValue1">{item.value1}</td>
                <td className="reportValue2">{item.value2}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="Engine Info w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Engine and Technical Information </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <table className="flex flex-col">
            <tbody className='shadow-lg mt-2 border-collapse'>
              {engineInfo.map((item, index) => (
              <tr className="flex group cursor-pointer border border-gray-200 rounded-none" key={index}>
                <td className="reportValue1">{item.value1}</td>
                <td className="reportValue2">{item.value2}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="Vehicle Registration w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Vehicle Registration and Tax Information </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <table className="flex flex-col">
            <tbody className='shadow-lg mt-2 border-collapse'>
              {vehicleRegistration.map((item, index) => (
              <tr className="flex group cursor-pointer border border-gray-200 rounded-none" key={index}>
                <td className="reportValue1">{item.value1}</td>
                <td className="reportValue2">{item.value2}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="Performance Details w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Performance Details </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <table className="flex flex-col">
            <tbody className='shadow-lg mt-2 border-collapse'>
              {performanceDetails.map((item, index) => (
              <tr className="flex group cursor-pointer border border-gray-200 rounded-none" key={index}>
                <td className="reportValue1">{item.value1}</td>
                <td className="reportValue2">{item.value2}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="Weight Details w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Weight and Dimension Details </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <table className="flex flex-col">
            <tbody className='shadow-lg mt-2 border-collapse'>
              {weightDetails.map((item, index) => (
              <tr className="flex group cursor-pointer border border-gray-200 rounded-none" key={index}>
                <td className="reportValue1">{item.value1}</td>
                <td className="reportValue2">{item.value2}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="Economic Details w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead !text-start md:!text-center !mx-2"> Economic and Environmental Details </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>

          <div>
            <EnergyEfficiency />
          </div>
          <table className="flex flex-col">
            <tbody className='shadow-lg mt-2 border-collapse'>
              {economicDetails.map((item, index) => (
              <tr className="flex group cursor-pointer border border-gray-200 rounded-none" key={index}>
                <td className="reportValue1">{item.value1}</td>
                <td className="reportValue2">{item.value2}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="Mileage History w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Milage History </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <table className="flex flex-col">
          <thead className='mt-2 border-collapse'>
              <tr className="flex group cursor-pointer border border-b-gray-500 border-gray-200 rounded-none">
                <td className="reportHeadValue"> Date </td>
                <td className="reportHeadValue"> Mileage Record </td>
              </tr>
            </thead>
            <tbody className='shadow-lg border-collapse'>
              {mileageHistory.map((item, index) => (
              <tr className="flex group cursor-pointer border border-gray-200 rounded-none" key={index}>
                <td className="reportValue1">{item.value1}</td>
                <td className="reportValue2">{item.value2}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="Condition-write-off-sector w-full mt-6 md:mt-12">
          <div className="flex rounded-sm relative items-center bg-ccBlue text-white mt-4">
            <p className="reportHead"> Condition Write-off Details </p>
              <Image className="absolute right-2 md:right-4" 
              src="/images/socials/infoIcon.svg" alt="" width={30} height={30} />
          </div>
          <div className="reportValueFull overflow-x-auto">
            <table dir="ltr" className="shadow-lg border-collapse 
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full">
              <thead className="text-center !text-black font-raleway font-medium text-sm md:text-base
              ">
                  <tr>
                      <td className="border px-6 md:px-8 lg:px-12 py-4 md:py-6">Date</td>
                      <td className="border px-6 md:px-8 lg:px-12 py-4 md:py-6">Test Result</td>
                      <td className="border px-6 py-4 md:py-6">Mileage</td>
                      <td className="border px-6 py-4 md:py-6">Advisory Notices</td>
                      <td className="border px-6 py-4 md:py-6">Failure Notices</td>
                  </tr>
              </thead>

              <tbody>
                {motHistory.map((item, index) => (
                  <tr key={index} className="text-center font-medium font-montserrat border text-sm md:text-base">
                      <td className="border pt-4 pb-8">{item.value1}</td>
                      <td className="border pt-4 pb-8">
                        <div className={` 
                          ${item.value2 === "Passed" ? 'bg-green-500' 
                            : item.value2 === "Failed" ? "bg-orange-500" 
                            : "bg-transparent"}  
                            py-3 mx-2 rounded-sm !text-white`}>{item.value2}</div>
                      </td>
                      <td className="border pt-4 pb-8">{item.value3}</td>
                      <td className="border pt-4 pb-8">{item.value4}</td>
                      <td className="border pt-4 pb-8">{item.value5}</td>
                  </tr>
                ))}  
              </tbody>           
            </table> 
          </div>
        </div>


      </main>
    </section>
  )
}


// OVERVIEW SECTOR //
interface Overview {
  value1?: string, value2?: string | number;
}
const overview: Overview[] = [
  {value1: "Outstanding Finance", value2: "No"},
  {value1: "Condition Write-off", value2: "Yes"},
  {value1: "Mileage Anomaly", value2: "No"},
  {value1: "Police Stolen", value2: "No"},
  {value1: "High Rish Record", value2: "No"},
  {value1: "High Risk Record", value2: "No"},
  {value1: "Used Before First Bag", value2: "No"},
  {value1: "Previous Keepers", value2: 5},
  {value1: "Plate Change", value2: "No"},
  {value1: "Color Change", value2: "No"},
  {value1: "Scrapped", value2: "No"},
  {value1: "VIC Inspected", value2: "No"},
  {value1: "VIN ends with", value2: 1234598322},
  {value1: "Engine Number", value2: "D4HABU556753"},
  {value1: "Imported", value2: "No"},
  {value1: "V5C Count", value2: 6},
]
// OVERVIEW SECTOR ENDS

//PREVIOUS KEEPER
interface PrevKeeperData {
value1?: string | number;
value2?: string | number;
value3?: string | number;
value4?: string | number;
value5?: string | number;
}
const prevKeeperData: PrevKeeperData[] = [
  {value1: "2022-09-14", value2: 4, value3: "2022-08-13" },
  {value1: "2022-06-15", value2: 3, value3: "2022-05-27" },
  {value1: "2022-06-02", value2: 2, value3: "2017-12-23" },
  {value1: "2015-06-14", value2: 1, value3: "2015-05-27" }
]
// PREVIOUS KEEPER END

// BASIC CHECKS
const basicChecks: Overview[] = [
  {value1: "Make", value2: "HYUNDAI"},
  {value1: "Model", value2: "IX35"},
  {value1: "Color", value2: "GREY"},
  {value1: "Fuel Type", value2: "DIESEL"},
  {value1: "Engine Size", value2: 1995},
  {value1: "Wheel Plan", value2: "2 AXLE RIGID BODY"},
  {value1: "Door Plan", value2: "ESTATE"},
  {value1: "Gears", value2: 6},
  {value1: "Transmission", value2: "MANUAL 6 GEARS"},
]

const engineInfo: Overview[] = [
  {value1: "Driving Axle", value2: "ALL - SELECTED"},
  {value1: "Power Delivery", value2: "NORMAL"},
  {value1: "Type Approval Category", value2: "M1"},
  {value1: "Primary Fuel Flag", value2: "Y"},
  {value1: "Engine Description", value2: "D4HA-A"},
  {value1: "Engine Location", value2: "FRONT"},
  {value1: "Engine Make", value2: "HYUNDAI"},
  {value1: "Engine Status", value2: "5"},
  {value1: "Bore", value2: "84"},
  {value1: "Stroke", value2: "90"},
  {value1: "Aspirations", value2: "TURBO"},
  {value1: "Cylinder Arrangement", value2: "INLINE"},
  {value1: "No of Cylinders", value2: "4"},
  {value1: "Valves Per Cylinder", value2: "4"},
  {value1: "Valve Gear", value2: "DOHC"},
]

const vehicleRegistration: Overview[] = [
  {value1: "First Registration", value2: "ALL - SELECTED"},
  {value1: "Year of Manufacture", value2: "NORMAL"},
  {value1: "Last V5C Issue Date", value2: "M1"},
  {value1: "Tax Band", value2: "Y"},
  {value1: "Tax Per Year", value2: "D4HA-A"},
]

const performanceDetails: Overview[] = [
  {value1: "Top Speed", value2: "112 Mph (181 Kph)"},
  {value1: "Power RPM", value2: "4000"},
  {value1: "Power BHP", value2: "134"},
  {value1: "Power KW", value2: "100"},
  {value1: "Torque RPM", value2: "2500"},
  {value1: "Torque FTLB", value2: "236"},
  {value1: "Torque NM", value2: "320"},
]

const weightDetails: Overview[] = [
  {value1: "Body Shape", value2: "NA"},
  {value1: "Height", value2: "1670"},
  {value1: "Kerb Weight", value2: "1679"},
  {value1: "Car Length", value2: "4410"},
  {value1: "Number of Axles", value2: "2"},
  {value1: "Number of Seats", value2: "5"},
  {value1: "Rigid Artic", value2: "RIGID"},
  {value1: "Wheel Base", value2: "SHORT WHEELBASE"},
  {value1: "Width", value2: "1820"},
]

const economicDetails: Overview[] = [
  {value1: "Extra Urban", value2: "54.3 mpg"},
  {value1: "Combined", value2: "48.7 mpg"},
  {value1: "Urban Cold", value2: "41.5 mpg"},
  {value1: "CO2 Emission", value2: "154 g/km"},
  {value1: "Ved Co2 Band", value2: "6"},
]

const mileageHistory: Overview[] = [
  {value1: "2022-11-17", value2: "79,212"},
  {value1: "2021-11-23", value2: "76,522"},
  {value1: "2020-12-02", value2: "71,470"},
  {value1: "2019-12-04", value2: "66,922"},
]

const motHistory: PrevKeeperData[] = [
  {value1: "2022-11-17", value2: "Passed", value3: "79,212", value4: "under trays fitted, Rear Coil spring corroded both (5.3.1 (b) (i)), Nearside Rear Child Seat fitted not allowing full inspection of adult belt (), sill covers fitted, Offside Front Suspension arm corroded but not seriously weakened (5.3.3 (b) (i)),", value5: "No Failures Noticed"},
  {value1: "2021-11-23", value2: "Passed", value3: "76,857", value4: "No Advisory Notices", value5: "No Failures Noticed"},
  {value1: "2020-12-02", value2: "Passed", value3: "71,470", value4: "Nearside Rear Tyre worn close to legal limit/worn on edge (5.2.3 (e)), Rear Brake disc worn, pitted or scored, but not seriously weakened (1.1.14 (a) (ii)), Offside Rear Tyre worn close to legal limit/worn on edge (5.2.3 (e)),", value5: "No Failures Noticed"},
  {value1: "2020-12-02", value2: "Failed", value3: "58,073", value4: "", value5: "Failed"},
]