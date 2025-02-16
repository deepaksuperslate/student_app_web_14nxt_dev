import { useState } from 'react'
import {
	BaseBoxShapeUtil,
	HTMLContainer,
	T,
	TLBaseShape,
	TLResizeInfo,
	createShapePropsMigrationIds,
	createShapePropsMigrationSequence,
	resizeBox,
    useEditor,
    stopEventPropagation
} from 'tldraw'

export type IMyShape = TLBaseShape<
	'myshape',
	{
		w: number
		h: number
		color: string
        text: string
	}
>

// [1]
const versions = createShapePropsMigrationIds(
	// this must match the shape type in the shape definition
	'myshape',
	{
		AddColor: 1,
	}
)

// [2]
export const cardShapeMigrations = createShapePropsMigrationSequence({
	sequence: [
		{
			id: versions.AddColor,
			up(props) {
				// it is safe to mutate the props object here
				props.color = 'lightblue'
			},
			down(props) {
				delete props.color
			},
		},
	],
})

export class MigratedShapeUtil extends BaseBoxShapeUtil<IMyShape> {
	static override type = 'myshape' as const

	static override props = {
		w: T.number,
		h: T.number,
		color: T.string,
        text: T.string
	}

	// [3]
	static override migrations = cardShapeMigrations

    override canEdit() {
		return true
	}

	getDefaultProps(): IMyShape['props'] {
		return {
			w: 300,
			h: 300,
			color: 'lightblue',
            text: 'Test Shape'
		}
	}

	component(shape: IMyShape) {
        const editor = useEditor()
        const [isEditing, setIsEditing] = useState(false);
        const [text, setText] = useState(shape.props.text);

        const handleDoubleClick = () =>  {
            console.log("clicked d ....")
            setIsEditing(true)
        };
        const handleBlur = () => {
            editor.updateShapes([{ id: shape.id, type: shape.type, props: { ...shape.props, text } }]);
            setIsEditing(false);
        };
		return (
			<HTMLContainer
				id={shape.id}
				style={{
					backgroundColor: shape.props.color,
					boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    pointerEvents: 'all'
				}}
                
			>
                <div onClick={(e) => handleDoubleClick()} onPointerDown={stopEventPropagation}>
                {isEditing ? (
          <textarea
            autoFocus
            defaultValue={shape.props.text}
            onBlur={handleBlur}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              outline: 'none',
              resize: 'none',
              background: 'transparent',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              lineHeight: 'inherit',
            }}
          />
        ) : (
          shape.props.text
        )}
                </div>
                
            </HTMLContainer>
		)
	}

	indicator(shape: IMyShape) {
		return <rect width={shape.props.w} height={shape.props.h} />
	}

	override onResize(shape: IMyShape, info: TLResizeInfo<IMyShape>) {
		return resizeBox(shape, info)
	}
}


type CounterShape = TLBaseShape<'counter', { w: number; h: number; count: number }>

export class CounterShapeUtil extends BaseBoxShapeUtil<CounterShape> {
	static override type = 'counter' as const
	static override props = {
		w: T.positiveNumber,
		h: T.positiveNumber,
		count: T.number,
	}

	override getDefaultProps() {
		return {
			w: 200,
			h: 200,
			count: 0,
		}
	}

	override component(shape: CounterShape) {
		const onClick = (event: any, change: number) => {
			event.stopPropagation()
			this.editor.updateShape({
				id: shape.id,
				type: 'counter',
				props: { count: shape.props.count + change },
			})
		}

		return (
			<HTMLContainer
				style={{
					pointerEvents: 'all',
					background: '#efefef',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 8,
				}}
			>
				<button onClick={(e) => onClick(e, -1)} onPointerDown={stopEventPropagation}>
					-
				</button>
				<span>{shape.props.count}</span>
				<button onClick={(e) => onClick(e, 1)} onPointerDown={stopEventPropagation}>
					+
				</button>
			</HTMLContainer>
		)
	}

	override indicator(shape: CounterShape) {
		return <rect width={shape.props.w} height={shape.props.h} />
	}
}
