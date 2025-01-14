import { bgcolor, width } from "@mui/system";


export default function VideoSummary(props) {
    return (
        <div 
          style={{
            backgroundColor: props.Even?"green":"blue",
            height: '124px'
          }}
        >
          {props.Text}
        </div>
      )
}