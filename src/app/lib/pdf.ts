import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { variable64 } from '../../assets/img';

(pdfMake as any).vfs = pdfFonts.vfs;

export interface EmployeeVoted {
  name: string;
  date: string;
  ip: string;
}

const generatePDF = (employeeVoted: EmployeeVoted[], dateGenerated: string) => {
  const tableBody = [
    [
      { text: 'Nome', style: 'tableHeader' },
      { text: 'Data', style: 'tableHeader' },
      { text: 'IP', style: 'tableHeader' },
    ],
    ...employeeVoted.map((vote) => [
      vote.name,
      vote.date,
      vote.ip,
    ]),
  ];

  const totalGeneral = employeeVoted.length;

  const content: any[] = [];

  content.push({
    columns: [
      { image: variable64.img, width: 50 },
      {
        stack: [
          { text: `Data de geração: ${dateGenerated}`, style: 'subheader' },
        ],
        alignment: 'right',
      },
    ],
  });

  content.push({
    qr: 'https://tivit.com/',
    fit: 100,
    alignment: 'right',
    margin: [0, 10, 0, 10],
  });

  content.push({ text: '\n' });

  content.push({
    table: {
      headerRows: 1,
      widths: ['*', '*', '*'],
      body: tableBody,
    },
    layout: 'lightHorizontalLines',
    margin: [0, 10, 0, 10],
  });

  content.push({
    columns: [
      { text: '', width: '*' },
      {
        text: `Total de votos: ${totalGeneral}`,
        style: 'total',
        alignment: 'right',
        margin: [0, 10, 0, 10],
      },
    ],
  });

  const styles = {
    header: {
      fontSize: 14,
      bold: true,
    },
    subheader: {
      fontSize: 12,
      margin: [0, 5, 0, 5],
    },
    tableHeader: {
      bold: true,
      fontSize: 12,
      color: 'black',
    },
    total: {
      fontSize: 12,
      bold: true,
    },
  };

  const docDefinition: any = {
    content,
    styles,
  };

  pdfMake.createPdf(docDefinition).open();
};

export default generatePDF;
