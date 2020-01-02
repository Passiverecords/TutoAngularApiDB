import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
@Pipe({
    name: 'accessePermission',
    pure: false
})

export class PermissionPipe implements PipeTransform {

    constructor(private auth: AuthService) {}
    transform(permission): boolean {
        return this.auth.permissions.includes(permission)
    }

}