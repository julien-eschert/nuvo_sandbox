import React from 'react'
import { ColumnAPI } from 'nuvo-react'
import {NuvoImporter} from "@/components/NuvoImporter";
import addFlashMessage from "@/actions/addFlashMessage";

export default function NuvoImplementation () {
  const exampleColumnConf: ColumnAPI[] = [
    {
      label: 'ID',
      key: 'id',
      validations: [ { validate: 'required' }, { validate: 'unique' } ]
    },
    {
      label: 'Input',
      key: 'input',
      validations: [ { validate: 'required' } ]
    }
  ]


  return (
    <NuvoImporter
      licenseKey=''
      settings={{
        embedUploadArea: true,
        disableTemplates: true,
        developerMode: true,
        identifier: 'sandbox',
        allowCustomColumns: true,
        maxEntries: 100,
        columns: exampleColumnConf,
        style: {
          buttons: {
            primary: {
              backgroundColor: '#10b981',
              color: '#ffffff',
              ':hover': {
                backgroundColor: '#059668',
              }
            }
          },
          dropzone: {
            container: {
              padding: 0,
              border: 0
            },
            icon: {
              box: {
                fill: '#334155'
              }
            },
          }
        }
      }}
      onResults={async (result, identifier, complete) => {
        addFlashMessage('test', 'test 123', 'success')
        complete()
      }}
    />
  )
}