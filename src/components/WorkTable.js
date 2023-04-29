import React from 'react';

const WorkTable = () => {
    return (
        <table>
                        <thead >
                            <tr>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1 py-1" aria-label="Org" scope="col">organisation</th>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1" aria-label="Link" scope="col">link</th>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1" aria-label="Role" scope="col">role</th>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1" aria-label="Role" scope="col">type</th>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1" aria-label="Period" scope="col">period</th>
                            </tr>
                        </thead>
                        <tbody className='border-b'>
                            <tr>
                                <th className='text-left text-med py-1'> Curelink </th>
                                <td className='text-left text-med py-1'> <a target="_blank" href="https://www.cure.link"> cure.link </a> </td>
                                <td className='text-left text-med py-1'> Software Development Engineer </td>
                                <td className='text-left text-med py-1'> Fulltime </td>
                                <td className='text-left text-med py-1'> Jan.22 - April.23 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> Nference Labs</td>
                                <td className='text-left text-med py-1'> <a href="https://nference.com/"> nference.com </a> </td>
                                <td className='text-left text-med py-1'> Software Engineer </td>
                                <td className='text-left text-med py-1'> Fulltime </td>
                                <td className='text-left text-med py-1'> 20.Aug - 21.Dec </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> PhpMyAdmin </td>
                                <td className='text-left text-med py-1'> <a href="https://www.phpmyadmin.net/"> phpmyadmin.net </a> </td>
                                <td className='text-left text-med py-1'> GSoC Engineer </td>
                                <td className='text-left text-med py-1'> Intern </td>
                                <td className='text-left text-med py-1'> May.2019 - Aug.2019 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> DataPhi Analytics Labs </td>
                                <td className='text-left text-med py-1'> <a href="https://dataphilabs.com/"> dataphilabs.com </a> </td>
                                <td className='text-left text-med py-1'> FullStack Engineer </td>
                                <td className='text-left text-med py-1'> Intern </td>
                                <td className='text-left text-med py-1'> May.2018 - Jul.2018 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> Radicali </td>
                                <td className='text-left text-med py-1'> <a href="https://www.radicali.io"> radicali.io </a> </td>
                                <td className='text-left text-med py-1'> Software Engineer </td>
                                <td className='text-left text-med py-1'> Intern </td>
                                <td className='text-left text-med py-1'> May.2019 - June.2019 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> LeanTrack </td>
                                <td className='text-left text-med py-1'> <a href=""> leantrack </a> </td>
                                <td className='text-left text-med py-1'> Product Designer </td>
                                <td className='text-left text-med py-1'> Intern </td>
                                <td className='text-left text-med py-1'> June.2019 - July.2019 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> IMG, IIT Roorkee </td>
                                <td className='text-left text-med py-1'> <a href="https://channeli.in/maintainer_site/"> IMG </a> </td>
                                <td className='text-left text-med py-1'> Developer & Chief Admin </td>
                                <td className='text-left text-med py-1'> Part-timer </td>
                                <td className='text-left text-med py-1'> Jan.2017 - Apr.2020 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> Redseer </td>
                                <td className='text-left text-med py-1'> <a href="https://redseer.com/"> redseer.com </a> </td>
                                <td className='text-left text-med py-1'> Freelance Data Scientist </td>
                                <td className='text-left text-med py-1'> Part-timer </td>
                                <td className='text-left text-med py-1'> Sep.2018 - Oct.2018 </td>
                            </tr>
                        </tbody>
                    </table>
    )
    
}

export default WorkTable;

