'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { Tldraw, TldrawOptions, DefaultPageMenu, useEditor, getSnapshot, Editor, exportToBlob, TLEventInfo, createShapeId, TLGeoShape } from 'tldraw'
import 'tldraw/tldraw.css'
import {MigratedShapeUtil, CounterShapeUtil} from './question'

export default function page() {
    const { topic, pageNumber } = useSelector((state: any) => state.note);
    const [editor, setEditor] = useState<Editor>();
  const [snapShot, setSnapShot] = useState();
  const [innerPageContentHeight, setInnerPageContentHeight] = useState(0);
  const contentHeightRef = useRef(innerPageContentHeight)

  useEffect(() => {
    contentHeightRef.current = innerPageContentHeight
  }, [innerPageContentHeight])

  const handleEvent = useCallback((data: TLEventInfo) => {
        // console.log(data)
        if(data.name === "pointer_up") {
            // console.log("i am inside the up...")
            // console.log(data)
            // console.log(data.point)
            // console.log(data.point.y)
            // console.log(data.point.y, innerPageContentHeight, contentHeightRef.current)
            if(data.point.y > contentHeightRef.current) {
                // console.log("welcome i")
                setInnerPageContentHeight(data.point.y)
            }
            // console.log(innerPageContentHeight)
            // if(editor)
            //     logUpdates(editor)
        }
        
        // setEvents((events) => {
        //     const newEvents = events.slice(0, 100)
        //     if (
        //         newEvents[newEvents.length - 1] &&
        //         newEvents[newEvents.length - 1].type === 'pointer' &&
        //         data.type === 'pointer' &&
        //         data.target === 'canvas'
        //     ) {
        //         newEvents[newEvents.length - 1] = data
        //     } else {
        //         newEvents.unshift(data)
        //     }
        //     return newEvents
        // })
    }, [])
	const setAppToState = useCallback((editor: Editor) => {
		setEditor(editor)

        editor.on('event', (event) => handleEvent(event))
	}, [])

  const convertBlobToBase64Async = (blob: any, mimeType: string) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrlPrefix = `data:${mimeType};base64,`;
        const base64WithDataUrlPrefix: any = reader.result;
        const base64 = base64WithDataUrlPrefix.replace(dataUrlPrefix, '');
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const logUpdates = async (editor: Editor) => {
    let snap = getSnapshot(editor.store)
    // console.log("snap shot")
    // console.log(snap)
    // console.log(JSON.stringify(snap))
    const shapeIds: any = editor.getCurrentPageShapeIds()
    if (shapeIds.size === 0) return alert('No shapes on the canvas')
      
    const blob = await exportToBlob({
      editor,
      ids: [...shapeIds],
      format: 'png',
      opts: { background: false },
    })
    const base64 = await convertBlobToBase64Async(blob, 'image/png');
    // console.log(base64);
  }

    useEffect(() => {
		if (!editor) return

		// function logChangeEvent(eventName) {
		// 	setStoreEvents((events) => [...events, eventName])
		// }

		//[1]
		const handleChangeEvent = (change: any) => {
			// Added
			for (const record of Object.values(change.changes.added) as any[]) {
				if (record.typeName === 'shape') {
					// logChangeEvent(`created shape (${record.type})\n`)
					// console.log(`created shape (${record.type})\n`)
                    logUpdates(editor)
				}
			}

      // Updated
			for (const [from, to] of Object.values(change.changes.updated) as any[]) {
				if (from.id.startsWith('shape') && to.id.startsWith('shape')) {
					logUpdates(editor)
				}
			}
			

			
		}

		// [2]
		const cleanupFunction = editor.store.listen(handleChangeEvent, { source: 'user', scope: 'all' })

		return () => {
			cleanupFunction()
		}
	}, [editor])

    

    const addQuestion = async () => {
        console.log("add question ...")
        if (!editor) return

        // const id = editor.createShapeId();
        
          
        /*editor.createShape({
            id: `shape:${Date.now()}` as any, // Unique ID
            type: "geo", // Geometric shape
            x: Math.random() * 500, // Random position
            y: Math.random() * 300,
            props: {
              geo: "rectangle", // Options: 'rectangle', 'ellipse', 'triangle'
              w: 100, // Width
              h: 100, // Height
            //   fill: "blue", // Background color
            },
          });*/

          
        //   const myShapeUtil = new MigratedShapeUtil(editor);
        //   editor.shapes.add(myShapeUtil);
        editor.createShape(
            {
              id: `shape:${Date.now()}` as any,
              type: 'myshape',
              x: 10,
              y: innerPageContentHeight,
              props: {
                w: 200,
                h: 100,
                text: 'New Note with dummy content checking the text on dynamic box',
              },
            },
        );
        // editor.select(id);

    }

    const init = async () => {
        console.log("welcome")
        setTimeout(() => {
        // if(editor) {
            console.log("w1")
            // setSnapShot(eData)
        // }
        }, 1000)
        
    }
    useEffect(() => {
        // init()
    }, [])
    const components = {
        ZoomMenu: null,
        Minimap: null,
        NavigationPanel: null,
        MainMenu: null
      }
      const options = {
        maxPages: 1
    }
    const customShape = [MigratedShapeUtil]
    return (
        <div>
            <div style={{height: '50px'}}>
                <p>{innerPageContentHeight}</p>
                <span><button onClick={addQuestion}>Add Question</button></span>
            </div>
            {/* <div style={{ position: 'fixed', inset: 0 }}> */}
            <div style={{ position: 'fixed', inset: 100 }}>
            {/* <div style={{ width: '100%', height: '94vh' }}> */}
            
                <Tldraw shapeUtils={customShape} components={components} options={options}  onMount={setAppToState} forceMobile>
                </Tldraw>
            </div>
        </div>
        
    )
}
