import { bootstrap }    from 'angular2/platform/browser'
import { SearchComponent } from './search.component'
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap( SearchComponent , [HTTP_PROVIDERS]);

