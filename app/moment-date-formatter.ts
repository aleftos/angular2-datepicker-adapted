/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 * Modified by Luis Sanabria from arquetic.org
 */

declare var moment: any;

export class DateFormatter {
    public format(date:Date, format:string):string {
        return moment(date.getTime()).format(format);
        //return  date.getTime().toString() ;
    }
}
