<?php

namespace App\Http\Controllers;

use App\Http\Resources\PermissionResource;
use Illuminate\Http\Request;
use App\Models\Permission;
use Illuminate\Validation\Rule;

class PermissionController extends Controller
{
    public function index()
    {
        return inertia('Admin/Permissions/PermissionIndex', [
            'permissions' => PermissionResource::collection(Permission::all()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return inertia('Admin/Permissions/PermissionCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:30', Rule::unique('permissions', 'name')],
            // 'guard_name' => ['required', 'string', 'max:30'],
        ]);
        Permission::create([
            'name' => $validated['name'],
            'guard_name' => 'web', // Default guard
        ]);
        return redirect()->route('permissions.index')->with('success', 'Permission created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Logic to fetch and return a specific user
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // Logic to show a form for editing a specific user
        $permission = Permission::findOrFail($id);

        return inertia('Admin/Permissions/PermissionEdit', [
            'permission' => new PermissionResource($permission),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Logic to update a specific user in the database
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:30', Rule::unique('permissions', 'name')->ignore($id)],
            // 'guard_name' => ['required', 'string', 'max:30'],
        ]);

        // Find the permission by ID and update it
        $permission = Permission::findOrFail($id);
        $permission->update($validated);
        return redirect()->route('permissions.index')->with('success', 'Permission updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Logic to delete a specific user from the database
        $permission = Permission::findOrFail($id);
        $permission->delete();
        return back()->with('success', 'Permission deleted successfully');
    }
}
