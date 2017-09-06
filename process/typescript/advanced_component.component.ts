import {Component} from 'angular2/core';

@Component({
  selector:"advancedcomponent",
  templateUrl:'/partials/advanced_component.html'
})

export class AdvancedComponent {
	branches:any = [];

	edit_branch:boolean = false;

	branch:any = {
		name    : '',
		type    : '',
		pincode : ''
	};
	branch_name:string;
	branch_type:string;
	branch_pincode:string;

	emptyBranch()
	{
		this.branch = [];
		this.branch.name    = '';
		this.branch.type    = '';
		this.branch.pincode = '';
	}

	addBranch() {
		this.branches.push(this.branch);
		this.emptyBranch();
		this.edit_branch = false;
	}

	editBranch(index)
	{
		if(this.edit_branch === true) {
			this.addBranch();
			this.edit_branch = false;
		} else {
			this.branch = this.branches[index];
			this.branches.splice(index, 1);
			this.edit_branch = true;
		}
	}
}
