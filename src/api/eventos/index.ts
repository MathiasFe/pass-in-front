import events from '../../mockup/events.json'
import { TEventsItem } from '../../Types/itemMockup'

export function getEvents(){
      let array:Array<TEventsItem> = events;
      return array;
}